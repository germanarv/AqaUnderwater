import React from 'react';

import '../styles/FormsStyle.account.css';


function SignIn() {
  return (
    <main>
      <div className="mainSignIn">
        <h1 className="titleSignIn">Inicia Sesión</h1>
        <p className="captionSignIn regSignIn">¿Eres nuevo en este sitio? <a href="/register">Regístrate</a></p>
        <div className="borderSignIn">
          <form className="formSignIn">
            <label for="email" className="formLabel">Correo electrónico</label>
            <input type="text" id="email" name="email" placeholder="Introduce tu correo electrónico" className="formInput" />

            <label for="password" className="formLabel">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Introduce tu contraseña" className="formInput" />
          </form>
          <button className="btnSignIn">Iniciar Sesión</button>
          <p className="captionSignIn">¿Olvidaste tu contraseña? <a href="/#">Haz click aquí</a></p>
        </div>
      </div>
    </main>
  );
}

export default SignIn;