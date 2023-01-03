import { useState } from 'react';
import './App.css';
import Login from './Login';
// import Authorized from './Authorize';
import RegistrationForm from './RegistrationForm';

function App() {
  const[isregistered,setregistered] =useState(false);
  return (
 <div>
{/* show the isregisterd  when registrationform */}

{!isregistered ?(<RegistrationForm setregistered ={setregistered}/>)

 : (<Login/>)}
{/* <Authorized/> */}
    </div>
  );
}

export default App;

