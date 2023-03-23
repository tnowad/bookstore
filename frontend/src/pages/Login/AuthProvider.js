import React, { createContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { userData } from './FakeData'
import { setCookie } from '../../hooks/useCookie'

export const AuthContext = createContext()

const AuthProvider = ({ children }, nameData) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    usernameCurrent: null,
    passwordCurrent: null,
  })
  const login = (username, password) => {
    const check = userData.some((user) => {
      return username === user.username && password === user.password
    })
    if (check) {
      setCurrentUser({
        usernameCurrent: username,
        passwordCurrent: password,
      })
      // setCookie('currentUser', currentUser, { path: '/' })
      setCookie('currentUser', currentUser, 5)
    }
    check ? (
      setLoggedIn(true)
    ) : (
      <div>
        {alert('Username or password not successfully ')}
        {setLoggedIn(false)}
      </div>
    )
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
