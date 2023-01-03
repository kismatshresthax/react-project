import { useEffect } from "react";
import { useState } from "react";
const RegistrationForm = ({ setregistered }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    submit: false,
  });
  const { username, password, confirmPassword } = userInfo;
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    console.log("i am effect");
  }, [userInfo.username, userInfo.password]);

  const handleUserName = ({ target: { value } }) => {
    console.log(value, "event");
    setUserInfo((prevValue) => {
      console.log(prevValue, "prev value");
      return { ...prevValue, username: value };
    });
  };
  console.log(userInfo, "userInfo");
  // handle password field
  const handlePassword = ({ target: { value } }) => {
    // update the value of pw
    setUserInfo({ ...userInfo, password: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    username !== "" && password !== ""
      ? alert(
          password === confirmPassword
            ? "Data Submitted"
            : "password must match!"
        )
      : alert("Fill Data!");
    setUserInfo({ ...userInfo, submit: true });
    setregistered(true);
  };
  const handleConfirmPassword = ({ target: { value } }) => {
    setUserInfo({ ...userInfo, confirmPassword: value });
    setErrorMessage(userInfo.password !== value && "Password must match!");
  };
  const [passwordShown, setPasswordShown] = useState("show password");
  const [type, setType] = useState('password');



  const togglePassword = () => {
   
    if (type === 'password') {
      setPasswordShown("show password");
      setType('text');
  } else {
     
        setPasswordShown("hide password");
        setType('password');
   
    
  }
  setTimeout(() => {
    setPasswordShown("show password");
  }, 3000);
   


  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>User Name</label>
      <input
        type="text"
        id="username-input"
        value={userInfo.username}
        placeholder="username"
        onChange={handleUserName}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="text"
        id="password"
        placeholder="Password"
        // onKeyUp={handleKeyUp}
        value={userInfo.password}
        onChange={handlePassword}
      />
      <br />
      <br />
      <label> Confirm Password</label>
      <input
             type={type}

        id="c-password"
        placeholder="Password"
        value={userInfo.confirmPassword}
        onChange={handleConfirmPassword}
      />
                  <span onClick={togglePassword} >{passwordShown}</span>

      <p style={{ color: "red" }}>{errorMessage}</p>
      <button
        // type="submit"
        id="button-input"
        // disabled={isEnable}
        // onClick={handleSubmit}
      >
        Register
      </button>
    </form>
  );
};
export default RegistrationForm;