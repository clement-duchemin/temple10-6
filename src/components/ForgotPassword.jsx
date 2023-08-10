import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import buildingDraw from '../Assets/login-side.svg';
import logo from '../Assets/logo-temple.svg'; 

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    //const navigate =  useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Vérifiez votre boîte de réception.');
            //navigate.push("/")
        } catch (e) {
            setError('Échec de la réinitialisation du mot de passe. Assurez-vous que votre email est correct.');
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
                <button>Reset password</button>
                {error && <p>{error}</p>}
                {message && <p>{message}</p>}
            </form>
            <div>
                <Link to='/'>S'identifier</Link>
            </div>
            <div className='copyright'>Copyright © 2023 TEMPLE 10.6 — Tous les droits sont réservés</div>
          </div>
          <div className="right-side">
             <img src={buildingDraw} alt="drawing of a building" className='right-side_draw'/> 
          </div>
        </div>
        </div>
      )
    }
    
    export default ForgotPassword

//     return (
//         <div className='reset-password-container'>
//             <h1 className='reset-password-title'>Reset Password</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email Address</label>
//                     <input id="email" onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <button>Reset password</button>
//                 {error && <p>{error}</p>}
//                 {message && <p>{message}</p>}
//             </form>
//             <div>
//                 <Link to='/'>Sign in</Link>
//             </div>
//         </div>
//     )
// }

// export default ForgotPassword;