import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useRegister = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const [ user, setuser] = useState({})

  const Register = async (name, email, password) => {
    setIsLoading(true)
    setError(null)
    setuser({name: name, email: email, password: password})

    const response = await fetch('https://heritagebioscope.onrender.com/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password })
    })

    const json =  response.json()
    console.log(json, 'heelo')

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { Register, isLoading, error }
}