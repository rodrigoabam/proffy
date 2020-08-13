import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function Login() {

  return (
    <div id="page-login">
      <div className="proffy">
        <div className="intro">
          <img src={logoImg} alt="proffy"/>
          <p>Sua plaforma de estudos online.</p>
        </div>
      </div>
      <div className="info-login">
          <h2>Fazer login</h2>
          <input type="text" placeholder="E-mail"/>
          <input type="text" placeholder="Senha"/>
      </div>
    </div>
  );
}

export default Login;