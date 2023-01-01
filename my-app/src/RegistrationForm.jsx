import React, { useState } from 'react'

 const RegistrationForm = () => {
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[confpassword,setConfirmPassword]=useState("");
    const [error, setError] = useState(false);

    const handleUserName=(event)=>{
        setUserName(event.target.value);
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleConfirmPassword=(event)=>{
        setConfirmPassword(event.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       username!=="" || password!=="" || confpassword!=="" ? password===confpassword ? alert('Succesfully register') : setError(true):setError(true);    
    }
  return (
    <form>
    <div>
        <label>Id:</label>
        <input type="text" value={username} placeholder ="Email&Number" onChange={handleUserName} />
        {error && username === "" ? (
                    <p>please fill the username</p>
                ) : (
                    ""
                )}
        <label>Password:</label>
        <input type="password" value={password} placeholder="password" onChange={handlePassword}/>
        {error && password === "" ? (
                    <p>please fill the password</p>
                ) : (
                    ""
                )}
        <label>Confirm Password:</label>
        <input type="password" value={confpassword} placeholder = "password" onChange={handleConfirmPassword}/>
        {error && password !== confpassword ? (
                    <p>password do not match</p>
                ) : (
                    ""
                )}<br/><br/>
        <button type="submit" value="submit" onClick={handleSubmit}>Login</button>
    </div>
    </form>
  )
}
export default RegistrationForm;