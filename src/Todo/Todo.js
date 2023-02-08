import { useState } from 'react';
import MainSection from './MainSection';
import './App.css';
import SideNav from './SideNav';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function App(props) {
  const [active, setActive] = useState("INBOX")
  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
    })
  }
  return (
    <div className='main'>

      {props.name ? (
        <>
          <div className='main'>
            <div className='main1'>
              <h1>To-do list of {props.name}</h1>
              <button onClick={handleSignout}>Sign Out</button>
            </div>
            <div className="container">
              <div className="sidenav">
                <SideNav change={setActive} />
              </div>
              <div className="mainsection">
                <MainSection active={active} />
              </div>
            </div>
          </div>
        </>
      ) : "Login Again"}
    </div>
  );
}