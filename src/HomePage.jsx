import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const HomePage = () => {
    const logout = () => {
        localStorage.removeItem('signUp')

    }
    return (
        <div>
            <div className='homepage_bg'>
                <div className='homepage-box'>
                    <h1>Home Page</h1>
                    <Link to='/'> <button onClick={logout} className='logout'>LogOut</button></Link>
                    <p className='username'>Hello <span className='username_span'>{localStorage.getItem('name')}</span></p>
                </div>
            </div>
        </div>
    )
}

export default HomePage