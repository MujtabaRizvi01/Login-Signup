import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('mongodb://localhost:3001/register',{email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <div>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder='Enter Email' autoComplete='off' name='email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Password' autoComplete='off' name='password' onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <button type='submit'>Register</button>
                    <p>Aready have an account? </p>
                    <button >Login</button>
                </form>
            </div>
        </div>
        
    )
}

export default Signup
