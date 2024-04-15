import React, { useEffect, useRef, useState } from 'react'
import HomePage from './HomePage'
import './index.css'
import { Link } from 'react-router-dom'
const App = () => {
    const name = useRef()
    const password = useRef()
    const [showHome, setShowHome] = useState(false)
    const localSignUp = localStorage.getItem('signUp')
    const localPassword = localStorage.getItem('password')
    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }

    })
    const handleClick = () => {
        if (name.current.value && password.current.value) {
            localStorage.setItem('name', name.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signUp', password.current.value)
            alert('account created successfully')

        }

    }
    const LoginHandle = (e) => {
        if (password.current.value == localPassword && password.current.value) {
            localStorage.setItem('signUp', password.current.value)
        }
        else{
         alert('incorrect login')
         e.preventDefault()
        
        
           
        }
    }
    return (
        <div>
            {showHome ? <HomePage />

                :
                <div className='container'>
                    <div className='input_space'>
                        <input type='text' placeholder='Name' ref={name} />
                    </div>
                    <div className='input_space'>
                        <input type='password' placeholder='Password' ref={password} />
                    </div>
                    <Link to='/HomePage'><button className='sign_button' onClick={(e)=>handleClick()}>Sign Up</button></Link>
                    <Link to='/HomePage'><button className='login_button' onClick={LoginHandle}>Login</button></Link>
                </div>
            }
        </div>
    )
}

export default App