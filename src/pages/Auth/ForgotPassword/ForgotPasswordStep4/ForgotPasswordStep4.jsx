import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/light/LogoRightText.png'
import ForgotPassCSS from '../ForgotPassword.module.css'
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';

function ForgotPasswordStep4() {
    const navigate = useNavigate();

    const irALogin = () => {
      navigate('/login'); 
    };

    const [contador, setContador] = useState('5');
    
    return (
        <div className={`flex justify-content-center align-items-center ${ForgotPassCSS.content}`}>
            <div className={`
                    flex 
                    justify-content-center 
                    align-items-center 
                    flex-column 
                    p-5
                    border-round-xl
                    w-25rem
                    lg:w-30rem
                    ${ForgotPassCSS.fondoLogin}
                    `
                }>
                <Image 
                    src={Logo} 
                    alt="Image" 
                    width="250" 
                />
                <p className="p-0 m-0 mt-4 text-xl">Recuperar Contraseña</p>
                <div className="flex justify-content-start align-items-center gap-1 lg:gap-2 ">
                    <i className={`pi pi-exclamation-triangle ${ForgotPassCSS.textWarning}`}></i>
                    <p className={`lg:text-lg ${ForgotPassCSS.textWarning}`}>¡La contraseña fue modificada con exito!.</p>
                </div>
                <p className="font-bold text-2xl w-15 text-center mt-1 text-blank">
                    Redirigiendo a la pantalla de inicio de sesión
                </p>
                <Avatar 
                    label={contador}
                    onChange={(e) => setContador(e.target.value)}
                    size="xlarge" 
                    shape="circle"
                />
                
            </div>
        </div>
    )
}

export default ForgotPasswordStep4
