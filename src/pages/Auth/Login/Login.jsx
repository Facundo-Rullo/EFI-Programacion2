import React , { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginCSS from './Login.module.css'
import Logo from '../../../assets/light/LogoRightText.png'
import { Image } from 'primereact/image';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';

const Login = () => {
    const navigate = useNavigate();

    const irADashboard = () => {
      navigate('/dashboard'); 
    };

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [checked, setChecked] = useState(false);
  return (
    <div className={`flex justify-content-center align-items-center ${LoginCSS.content}`} >
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
                        <label htmlFor="cuit">CUIT</label>
                        <InputText
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                            id="cuit" 
                            aria-describedby="cuit-help" 
                            className="bg-transparent text-white" 
                        />
                        <small id="cuit-help" style={{ color: "var(--red_300)" }} className="hidden">
                            !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                        </small>
                </div>
                <div className="flex flex-column gap-2 w-full">
                        <label>Contraseña</label>
                        <Password 
                            value={inputPassword} 
                            onChange={(e) => setInputPassword(e.target.value)} 
                            toggleMask 
                            className="static block"
                            inputClassName="bg-transparent text-white w-full" 
                            feedback={false}
                        />
                        <small id="password-help" style={{ color: "var(--red_300)" }} className="hidden">
                            !!!!!!!!!!!!!!AGREGAR VALIDACIONNN!!!!!!!!!!!!!!!
                        </small>
                </div>
                <div className="flex justify-content-between align-items-center gap-2 w-full mb-4 mt-4">
                    <div>
                        <Checkbox inputId='checkLogin' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                        <label htmlFor="checkLogin" className="ml-2" >Recordarme</label>
                    </div>
                    <Link to="/recuperarContraseniaPaso1" className={`ml-2 ${LoginCSS.forgotPass}`}>¿Olvidaste tu contraseña?</Link>
                </div>
                <Button 
                    type="submit" 
                    label="Iniciar Sesión" 
                    className={`
                        w-full 
                        border-none 
                        text-white
                        ${LoginCSS.btnLoginSesion} 
                    `} 
                    onClick={() => irADashboard()}
                />
            </form>
        </div>
    </div>
  );
};

export default Login;
