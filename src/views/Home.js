import React from 'react'
import TheNavbar from '../components/TheNavbar'
import {useHistory} from 'react-router-dom'
import payload from '../utils/payload'

function Home (){
const history = useHistory()
const user = payload()
console.log(user)
    return(
        <div>
            <TheNavbar/>
            {user?(   <div>
                 <h1>Bienvenid@</h1>
             </div> ):(
             <div>
                <button onClick={()=>{
                history.push('/login')
            }}>Login</button>
            <button onClick={()=>{
                history.push('/sign-up')
            }}>Sign Up</button>
            </div>
            )}
           
        </div>
    )
}

export default Home;