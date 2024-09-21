import React from 'react'

const ErrorMessage = ({message,errorClass}) => {
  return (
    <div className={errorClass}>{message||''}</div>
  )
}

export default ErrorMessage