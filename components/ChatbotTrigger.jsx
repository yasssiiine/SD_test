'use client'

export default function ChatbotTrigger({
  children = 'Parler à l’assistant IA',
  className = 'btn',
  onOpen,
}) {
  const openChatbot = () => {
    window.dispatchEvent(new Event('smartdex:open-chat'))
    onOpen?.()
  }

  return (
    <button type="button" className={className} onClick={openChatbot}>
      {children}
    </button>
  )
}
