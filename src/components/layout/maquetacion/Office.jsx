import React from 'react';
import "./Style.css"

const Office = () => {
    return (
            
            <div className='login-office'>
                <form className='form'>
                    <img src="\maqueta\src\assets\logoOffice.png" alt="logoOffice" id='logo'/>
                    <h2>Iniciar sesión</h2>
                    
                    <div className="input">
                        <input type="text" placeholder="Correo electronico, telefono o Skype" required />
                    </div>

                    <div className="olvidar">
                        <p>¿No tiene una cuenta?</p> <a href="#">Cree una.</a>
                    </div>

                    <div className="olvidar">
                        <a href="#">¿No puede acceder a su cuenta?</a>
                    </div>

                    <button type="submit">Siguiente</button>

                    <button type="submit">Atras</button>
                
                </form>
                <div>
                    <button className='opcionesInicio'>Opciones de inicio de sesión</button>
                </div>
                <div className='cosas'>
                    <button>Terminos de uso</button>
                    <button>Privacidad y cookies</button>
                </div>
            </div>
                
    )
}

export default Office;