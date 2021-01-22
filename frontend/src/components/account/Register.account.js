import React from 'react';

import '../styles/FormsStyle.account.css';


function Register(props) {
  return (
    <main>
      <div className="mainSignIn">
        <h1 className="titleSignIn">Regístrate</h1>
        <p className="captionSignIn regSignIn">¿Ya tienes una cuenta? <a href="/signin">Inicia Sesión</a></p>
        <div className="borderSignIn">
          <form className="formSignIn">
            <label htmlFor="firstName" className="formLabel">Nombre</label>
            <input autoFocus type="text" id="firstName" name="firstName" placeholder="Introduce tu nombre" className="formInput" onChange={props.onChange} />

            <label htmlFor="lastName" className="formLabel">Apellido</label>
            <input type="text" id="lastName" name="lastName" placeholder="Introduce tu apellido" className="formInput" onChange={props.onChange} />

            <label htmlFor="email" className="formLabel">Correo electrónico</label>
            <input type="text" id="email" name="email" placeholder="Introduce tu correo electrónico" className="formInput" onChange={props.onChange} />

            <label htmlFor="password" className="formLabel">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Introduce tu contraseña" className="formInput" onChange={props.onChange} />

            <label htmlFor="password2" className="formLabel">Confirmar Contraseña</label>
            <input type="password" id="password2" name="password2" placeholder="Introduce tu contraseña" className="formInput" onChange={props.onChange} />
          </form>
          <button type="submit" className="btnRegister" onClick={props.onSubmit}>Registrar</button>
        </div>
      </div>
    </main>
  );
}

export default Register;