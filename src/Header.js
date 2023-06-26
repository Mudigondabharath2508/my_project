import React from 'react'

export const Header = (props) => {
  const { styles } = props
  return (
    <div>
      <h1 style={{ color: styles,fontFamily:"sans-serif" }}>Welcome</h1>
    </div>
  )
}
