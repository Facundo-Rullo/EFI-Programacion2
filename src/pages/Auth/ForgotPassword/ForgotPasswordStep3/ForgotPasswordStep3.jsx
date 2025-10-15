import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/light/LogoRightText.png'
import ForgotPassCSS from '../ForgotPassword.module.css'
import { Image } from 'primereact/image';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

function ForgotPasswordStep3() {
    const navigate = useNavigate();

    const irALogin = () => {
      navigate('/login'); 
    };

    const forgotPasswordStep4 = () => {
      navigate('/recuperarContraseniaPaso4'); 
    };

    const [inputEmail, setInputEmail] = useState('frullo@trigolimpio.com');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');
    return (
        <div className={`flex justify-content-center align-items-center ${ForgotPassCSS.content}`}>
        <div className={`
                flex 
                justify-content-center 
                align-items-center 
                flex-column 
                p-5
                border-round-xl
                ${ForgotPassCSS.fondoLogin}
                `
            }>
            <Image 
                src={Logo} 
                alt="Image" 
                width="250" 
            />
            <p className="p-0 m-0 mb-3 mt-4 text-xl">Recuperar Contraseña</p>
            
            <form className="lg:w-25rem">
                <div className="flex flex-column gap-2 w-full mb-1">
                        <label htmlFor="email">Email</label>
                        <InputText 
                            type="email" 
                            id="email" 
                            aria-describedby="email-help" 
                            className="
                            bg-transparent 
                            text-white
                            " 
                            value={inputEmail} 
                            onChange={(e) => setInputEmail(e.target.value)}
                            readOnly
                        />
                        <small id="username-help" style={{ color: "var(--red_300)" }} className="hidden">
                            !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                        </small>
                </div>
                <div className="flex justify-content-start align-items-center gap-2 ">
                    <i className={`pi pi-exclamation-triangle ${ForgotPassCSS.textWarning}`}></i>
                    <p className={`${ForgotPassCSS.textWarning}`}>Ingrese su nueva contraseña.</p>
                </div>
                <div className="flex flex-column gap-2 w-full mb-3">
                        <label>Nueva Contraseña</label>
                        <Password 
                            value={inputPassword} 
                            onChange={(e) => setInputPassword(e.target.value)} 
                            toggleMask 
                            className="static block"
                            inputClassName="bg-transparent text-white w-full" 
                        />
                        <small id="username-help" style={{ color: "var(--red_300)" }} className="hidden">
                            !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                        </small>
                </div>
                <div className="flex flex-column gap-2 w-full mb-4">
                        <label>Repetir Contraseña</label>
                        <Password 
                            value={inputConfirmPassword} 
                            onChange={(e) => setInputConfirmPassword(e.target.value)} 
                            toggleMask 
                            className="static block"
                            inputClassName="bg-transparent text-white w-full" 
                        />
                        <small id="username-help" style={{ color: "var(--red_300)" }} className="hidden">
                            !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                        </small>
                </div>
                <div className="flex gap-3 md:gap-5 flex-wrap md:flex-nowrap">
                    <Button 
                        type="submit" 
                        label="Recuperar" 
                        className={`
                        w-full  
                        border-none 
                        text-white 
                        ${ForgotPassCSS.btnForgot}
                        `}
                        onClick={() => forgotPasswordStep4()}
                    />
                    <Button 
                        type="button" 
                        label="Cancelar" 
                        className={`
                        w-full  
                        border-none 
                        text-white 
                        ${ForgotPassCSS.btnForgot}
                        `} 
                        onClick={() => irALogin()}
                    />
                </div>
            </form>
        </div>
        </div>
    )
}

export default ForgotPasswordStep3
