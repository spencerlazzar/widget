import React, { useState, useEffect } from 'react'

const Convert = ({ language, text }) => {

  useEffect(( language, text ) => {
    console.log('New language or text')
  }, [language, text])

  return (
    <div>
      
    </div>
  )
}

export default Convert
