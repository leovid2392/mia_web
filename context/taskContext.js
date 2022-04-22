import { createContext, useState } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false)

  const handleAsideMenu = () => {
    if (!isAsideMenuOpen) {
      setIsAsideMenuOpen(true)
    } else {
      setIsAsideMenuOpen(false)
    }
  }

  return (
    <TaskContext.Provider value={{ isAsideMenuOpen, handleAsideMenu }}>
      {children}
    </TaskContext.Provider>
  )
}
