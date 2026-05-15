import { serviceItems, serviceDetails } from '../data/services'

export function getServices(compact = false) {
  return compact ? serviceItems.slice(0, 4) : serviceItems
}

export function getServiceDetails() {
  return serviceDetails
}
