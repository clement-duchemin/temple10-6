import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import buildingDraw from '../Assets/login-side.svg';
import logo from '../Assets/logo-temple.svg'; 

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password);
            navigate('/account');
        }catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }



    return (
        <div className='full-page'>
        <div className='signup-container'>
          <div className="left-side">
            <div className="logo"><img src={logo} alt="" /></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"></label>
                    <input id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Mot de passe'/>
                </div>
                <button>Se connecter</button>
                {error && <p>{error}</p>}
            </form>
            <p className='signup-p'>
                    <Link to='/'>S'identifier</Link> 
            </p>
            <div className='copyright'>Copyright © 2023 TEMPLE 10.6 — Tous les droits sont réservés</div>
          </div>
          <div className="right-side">
             <img src={buildingDraw} alt="drawing of a building" className='right-side_draw'/> 
          </div>
        </div>
        </div>
      )
    }
    
    export default Signup

