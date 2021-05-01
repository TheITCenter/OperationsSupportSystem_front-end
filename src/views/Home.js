import React from 'react'
import TheNavbar from '../components/TheNavbar'
import { useHistory } from 'react-router-dom'
import payload from '../utils/payload'

import './views.scss'

function Home() {
    const history = useHistory()
    const user = payload()
    console.log(user)
    return (
        <div>
            <TheNavbar />
            {user ? (<div>
                <h2 id="welcome">Dashboard</h2>
            </div>) : (
                <div>
                    <h2 id="welcome">Bienvenido a tu sistema de control de operaciones</h2>
                    <div id="buttons">
                        <button onClick={() => {
                            history.push('/login')
                        }} className="button btn-lg" >Login</button>
                        <button onClick={() => {
                            history.push('/sign-up')
                        }} className="button btn-lg">Sign Up</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Home;