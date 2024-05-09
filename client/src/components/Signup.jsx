import React, { useState } from 'react'


const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    console.log(password, firstName, lastName);

    const handleSubmit = () => {
        console.log("Details submitted successfully");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label><input name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border border-black '/></div>
            <div><label htmlFor="lastName">Last Name</label><input name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/></div>
            <div><label htmlFor="password">Password</label><input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/></div>
            <div><button type="submit"></button></div>
        </form>
    )
}

export default Signup
