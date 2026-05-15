import { projects } from '../data/projects'

export function getProjects() {
  return projects
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null
}
