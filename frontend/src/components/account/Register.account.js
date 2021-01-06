import React from 'react';

import '../styles/FormsStyle.account.css';


function Register() {
  return (
    <main>
      <div className="mainSignIn">
        <h1 className="titleSignIn">Regístrate</h1>
        <p className="captionSignIn regSignIn">¿Ya tienes una cuenta? <a href="/signin">Inicia Sesión</a></p>
        <div className="borderSignIn">
          <form className="formSignIn">
            <label for="firstName" className="formLabel">Nombre</label>
            <input type="text" id="firstName" name="firstName" placeholder="Introduce tu nombre" className="formInput" />

            <label for="lastName" className="formLabel">Apellido</label>
            <input type="text" id="lastName" name="lastName" placeholder="Introduce tu apellido" className="formInput" />

            <label for="email" className="formLabel">Correo electrónico</label>
            <input type="text" id="email" name="email" placeholder="Introduce tu correo electrónico" className="formInput" />

            <label for="password" className="formLabel">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Introduce tu contraseña" className="formInput" />
          </form>
          <button className="btnRegister">Registrar</button>
        </div>
      </div>
    </main>
  );
}

export default Register;