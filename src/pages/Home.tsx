import React, {useEffect} from 'react';
import logo from 'assets/images/logo.svg';

import {PropsInterface} from 'helpers/interfaces';

export const Home = (props: PropsInterface) => {

  useEffect(() => {
    props.style.darkMode.elements.push(['App', 'App-dark'])
  }, [props])

  return (
    <div id="App" className='App'>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The <code>flask-react-starter/</code> project has integraterd  
        </p>
        <p>
          many essential features for the purpose of frameworking a standard application
        </p>
        <p>
          using <code>react</code> as the frontend and <code>flask</code> as the backend.
        </p>

        <button type="button" className="btn btn-primary btn-lg" 
          onClick={() =>
            props.nav.redirect('/login')
        }> Getting Started</button>
      
      </header>
    </div>
  );
}

export default Home;
