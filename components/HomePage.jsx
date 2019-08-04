import React from 'react'
import NavBar from './NavBar'
import Splash from './Splash'
import Background from './Background'
import Interests from './Interests'
import ContactForm from './ContactForm.jsx'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Splash />
        <div className="content-container">
          <Background />
          <Interests />
          <ContactForm />
        </div>
        <div className="footer">
          Created with Flask, React.js, and Pure.css.
        </div>
      </div>
    );
  }
};

export default HomePage;
