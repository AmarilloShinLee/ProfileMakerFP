import { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        await axios.post('http://localhost:5000/login')
            .then()
            .catch()

        // const response = await fetch('/api/users/login', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({userEmail, userPassword})
        // })
        // const json = await response.json()

        // if (!response.ok) {
        //     setIsLoading(false)
        //     setError(json.error)
        // }

        // if (response.ok) {

        //     // save user to local storage
        //     localStorage.setItem('user', JSON.stringify(json))

        //     // update Auth Context
        //     dispatch({type: 'LOGIN', payload: json})

        //     setIsLoading(false)
        // }
    }

    return { login, isLoading, error }
}