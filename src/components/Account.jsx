import React from 'react';
import {UserAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo-w.b0120cb9.svg'; 
import backgroundImage from '../Assets/temple-bckg.jpg'; 
import teaser from '../Assets/teaser.jpg';
import investment from '../Assets/investment.jpg';
import movieIcon from '../Assets/movie-icon.jpg';
import perspectives from '../Assets/perspectives.jpg';
import virtual from '../Assets/virtual.jpg';
import press from '../Assets/press.jpg';



const buttons = [
  { icon: teaser, link: "https://www.dropbox.com/sh/147tspskujh0qr4/AABUVA_HI29huQhFpHtxsXvKa?dl=1", title: "Teaser" },
  { icon: investment, link: "https://www.dropbox.com/sh/81r298ma2g2dpw3/AABFWjg4GSysjI-4LM9H1e2xa?dl=1", title: "Investment\nMemorandum" },
  { icon: movieIcon, link: "https://www.dropbox.com/s/a4p3safkjbvrgq1/TEMPLE10.6_MASTER_310323.mp4?dl=0&raw=1", title: "Movie", isPopup: true},
  { icon: perspectives, link: "https://www.dropbox.com/sh/hd5d1y1mcl7bzy4/AAAsWw6oVbL9y1EwuARJ4S42a?dl=1", title: "Renders" },
  { icon: virtual , link: "https://portal.furioos.com/share/zaCWgR6xbpG95XwRQ", title: "Virtual Visit" },
  { icon: press , link: "https://www.dropbox.com/sh/n144s6cr7zlccte/AACzfepErPp8s2-tSsMflrP0a?dl=1", title: "Press Review" },
];




function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message)
    }
  }



  return (
    <div className="account">
      <div className="left" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="container">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo-account" style={{fill: 'white'}}/>
          <h1 className='title-account'>TEMPLE 10.6 THE HIGHEST OFFICE BUILDING IN THE MARAIS</h1>
        </div>
        <div className="user-section">
           <p className='user'>{user && user.email}</p> 
          <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="button-section">
        {buttons.map((button, index) => (
          <div className='card' key={index}>
            <a href={button.link} className='a-link'
               target={button.isPopup ? 'popup' : '_blank'} 
               rel="noreferrer"
               onClick={button.isPopup ? (e) => {
                e.preventDefault(); // Prevent default link behavior

                 // Calculate the center position for the popup window
                 const popupWidth = 1100;
                 const popupHeight = 700;
                 const left = (window.screen.width - popupWidth) / 2;
                 const top = (window.screen.height - popupHeight) / 2;

                 // Open the popup window at the center
                window.open(button.link, 'popup', `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`, ); 
              } : undefined}
            >
              <button className='button-link'>
                <img src={button.icon} alt={button.title} />               
              </button>
              <p>{button.title}</p>
            </a>
          </div>
        ))}
         </div>
      </div>
    </div>
  );
}

export default Account;