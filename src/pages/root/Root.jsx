import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <h1>hello</h1>
      <Outlet />
    </>

  )
}

export default Root