import { createContext, useState, useEffect } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false)
  const [isScreenWide, setIsScreenWide] = useState()

  const handleAsideMenu = () => {
    if (!isAsideMenuOpen) {
      setIsAsideMenuOpen(true)
    } else {
      setIsAsideMenuOpen(false)
    }
  }

  useEffect(() => {
    const screen = window.innerWidth
    if (screen > 500) {
      setIsScreenWide(true)
    } else {
      setIsScreenWide(false)
    }
  }, [])

  return (
    <TaskContext.Provider
      value={{ isAsideMenuOpen, handleAsideMenu, isScreenWide }}
    >
      {children}
    </TaskContext.Provider>
  )
}
