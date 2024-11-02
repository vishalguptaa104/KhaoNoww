import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>OOPS...</h1>
        <h2>Something Went Wrong!</h2>
        <h3>{err.status}</h3>
    </div>
  )
}

export default Error