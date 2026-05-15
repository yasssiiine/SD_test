'use client'

import { useEffect, useSyncExternalStore } from 'react'

const THEME_CHANGE_EVENT = 'smartdex-theme-change'

function getThemeSnapshot() {
  if (typeof window === 'undefined') return false

  const saved = localStorage.getItem('theme')
  return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
}

function subscribeToThemeChanges(callback) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const notify = () => callback()

  window.addEventListener('storage', notify)
  window.addEventListener(THEME_CHANGE_EVENT, notify)
  mediaQuery.addEventListener('change', notify)

  return () => {
    window.removeEventListener('storage', notify)
    window.removeEventListener(THEME_CHANGE_EVENT, notify)
    mediaQuery.removeEventListener('change', notify)
  }
}

function applyTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeToThemeChanges, getThemeSnapshot, () => false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => applyTheme(!isDark)

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDark ? 'Mode sombre actif' : 'Mode clair actif'}
    >
      <span className="theme-icon">{isDark ? '🌙' : '☀️'}</span>
    </button>
  )
}
