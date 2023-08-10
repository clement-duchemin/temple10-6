import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import buildingDraw from '../Assets/login-side.svg';
import logo from '../Assets/logo-temple.svg'; 

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password);
            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }
    
    return (
        <div className='full-page'>
        <div className='signup-container'>
          <div className="left-side">
            <div className="logo"><img src={logo} alt="temple logo" /></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"></label>
                    <input id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Mot de passe'/>
                </div>
                <button>S'identifier</button>
                {error && <p>{error}</p>}
            </form>
            <div className='password-reset'>
                <Link to="/forgot-password">Mot de passe oublié?</Link>
            </div>
            <p className='signup-p'>
                    <Link to='/signup'>S'inscrire</Link> 
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
    
    export default Signin

//   return (
//     <div className='signup-container'>
//     <div>
//         <h1 className='signup-title'>Sign in to your account</h1>
//         <p className='signup-p'>
//             Don't have an account yet ? <Link to='/signup'>Sign up.</Link> 
//         </p>
//     </div>
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="email">Email Adress</label>
//             <input id="email" onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//             <label htmlFor="password">Password</label>
//             <input id="password" onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button>Sign in</button>
//         {error && <p>{error}</p>}
//     </form>
//     <div>
//         <Link to="/forgot-password">Forgot Password?</Link>
//     </div>
// </div>
//   )
// }

// export default Signin