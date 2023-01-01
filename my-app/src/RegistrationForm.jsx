import React from 'react';
import { useState } from 'react';

const RegistrationForm = () => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    console.log(userInfo, "yesss");
    // const [isError, setIsError] = useState('');
    // const [password, setPassword] = useState('');
    // const [register, setEnabled] = useState(true);
    // const [confirmPassword,setConfirmPassword] = useState('');
    // const onSubmit = () => {
        // alert('Your Logged In');
    // };
//     const handleUserName = (event) => {
//         console.log(event.target.value);
//     setUserInfo(event.target.value);
//     };
    const handleUserName = ({target : {value}}) => {
        console.log(value, "Event");
        setUserInfo({...userInfo, username: value});
        };

    const handlePassword = ({target : {value}}) => {
        console.log(value, "Event");
        setUserInfo({...userInfo, password: value});
        };

    const handleConfirmPassword = ({target : {value}}) => {
        console.log(value, "Event");
        setUserInfo({...userInfo, confirmPassword: value});
        };    

//     const handleUserPassword = (event) => {
//         console.log(event.target.value);
//         setPassword(event.target.value);
//     };

//     const handleConfirmPassword = (event) => {
//         setConfirmPassword(event.target.value);
//     };

//     const handleSubmit = () => {
//         if(password != confirmPassword){
//             alert("Password Should Match")
//         }else{username !== "" && password !== ""
//             ? alert('Data Submited')
//             : alert('Cannot Be Empty');
//             setIsError(' ')
//         }
//     };

    return (
        <div>
           <form>
            <label>User Name</label>
            <input
                type="text"
                id="user_input"
                placeholder="Username"
                onChange={handleUserName}
            />
            <br />
            <label>Password</label>
            <input
                type="password"
                id="password"
                placeholder="Password"
                // onChange={handleUserPassword}
                onChange={handlePassword}
            />
            <br />
            <label>Confirm Password</label>
            <input
            // value={confirmPassword}
            type="password"
            id="password"
            placeholder='Confirm Password'
            onChange = {handleConfirmPassword}
            />
            <br/>
            {/* <button type="submit" onClick={handleSubmit}>
                Register
            </button> */}
            </form> 
         </div>
    );
};

export default RegistrationForm;
