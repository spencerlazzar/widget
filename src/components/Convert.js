import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [ translated, setTranslated ] = useState('')
  const [ debouncedText, setDeboundedText ] = useState(text)


  // useEffect 1 to set timeout
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboundedText(text);
    }, 500)
    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  // Using deboundedText from useEffect #1 to make call
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
          {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
          }
        })

        setTranslated(data.data.translations[0].translatedText)
    }

    doTranslation()
  }, [language, debouncedText])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}

export default Convert
