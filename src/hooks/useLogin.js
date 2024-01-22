import { useState } from 'react'
import { useAuthContext } from './useAuthContext'


export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  

  const Login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://heritagebioscope.onrender.com/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    
    const json = response.json()
    console.log(json, 'hello')

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'Login', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { Login, isLoading, error }
}