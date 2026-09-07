import React from 'react'
import { createContext } from 'react'

export const createCxt = createContext()

const ThemeContext = (props) => {
  return (
    <div>
    <createCxt.Provider value="Ali Hassan">
      {props.children}
    </createCxt.Provider>
    </div>
  )
}

export default ThemeContext
