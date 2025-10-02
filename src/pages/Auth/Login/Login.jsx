import React , { useState } from "react";
import LoginCSS from './Login.module.css'
import Logo from '../../../assets/light/LogoRightText.png'
import { Image } from 'primereact/image';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';

const Login = () => {
    const [checked, setChecked] = useState(false);
  return (
    <div className={`
            flex 
            justify-content-center 
            align-items-center 
            flex-column 
            p-5
            border-round-xl
            ${LoginCSS.fondoLogin}`
        }>
        <Image 
            src={Logo} 
            alt="Image" 
            width="250" 
        />
        <h1 className="p-0 m-0 mt-3 text-4xl">Bienvenido</h1>
        <p className="p-0 m-0 mb-4 text-xl">Inicia sesión para continuar</p>

        <form className="lg:w-25rem">
            <div className="flex flex-column gap-2 w-full mb-4">
                    <label htmlFor="username">CUIT</label>
                    <InputText id="username" aria-describedby="username-help" className="bg-transparent text-white" />
                    <small id="username-help" style={{ color: "red" }} className="hidden">
                        !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                    </small>
            </div>
            <div className="flex flex-column gap-2 w-full">
                    <label htmlFor="username">Contraseña</label>
                    <InputText type="password" id="username" aria-describedby="username-help" className="bg-transparent text-white"/>
                    <small id="username-help" style={{ color: "red" }} className="hidden">
                        !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                    </small>
            </div>
            <div className="flex justify-content-between align-items-center gap-2 w-full mb-4 mt-4">
                <div>
                    <Checkbox inputId='checkLogin' onChange={e => setChecked(e.checked)} checked={checked} className={`${LoginCSS.che}`}></Checkbox>
                    <label htmlFor="checkLogin" className="ml-2" >Recordarme</label>
                </div>
                <a href="#" className={`ml-2 ${LoginCSS.forgotPass}`}>¿Olvidaste tu contraseña?</a>
            </div>
            <Button type="submit" label="Iniciar Sesión" className={`w-full ${LoginCSS.btnLoginSesion} border-none`}/>
        </form>
    </div>
  );
};

export default Login;
