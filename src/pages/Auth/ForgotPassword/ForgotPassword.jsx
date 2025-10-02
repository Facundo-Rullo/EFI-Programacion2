import React , { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/light/LogoRightText.png'
import ForgotPassCSS from './ForgotPassword.module.css'
import { Image } from 'primereact/image';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';

function ForgotPassword() {
    const navigate = useNavigate();
    const irAHome = () => {
      navigate('/'); 
    };
  return (
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
        <p className="p-0 m-0 mb-4 text-xl mt-3">Recuperar Contraseña</p>

        <form className="lg:w-25rem">
            <div className="flex flex-column gap-2 w-full mb-4">
                    <label htmlFor="email">EMAIL</label>
                    <InputText type="email" id="email" aria-describedby="email-help" className="bg-transparent text-white" />
                    <small id="username-help" style={{ color: "red" }} className="hidden">
                        !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                    </small>
            </div>
            <div className="flex gap-3 md:gap-5 flex-wrap md:flex-nowrap">
                <Button type="submit" label="Recuperar" className={`w-full  border-none`}/>
                <Button type="submit" label="Volver" className={`w-full  border-none`} onClick={() => irAHome()}/>
            </div>
        </form>
    </div>
  )
}

export default ForgotPassword
