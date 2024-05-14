import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {name, password}
        try {
            const res = await fetch('http://localhost:8000/app/user/signup', {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            // const res = await axios.post('http://localhost:8000/app/user/signup', user)
            if(!res.ok){
                throw new Error("Didn't send")
                return
            }
            const data = await res.json()
            console.log(data);
            console.log("Details submitted successfully");
        }catch(error){
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label><input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className='border border-black ' />
            </div>
            <div>
                <label htmlFor="password">Password</label><input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div><button type="submit"></button></div>
        </form>
    )
}

export default Signup
