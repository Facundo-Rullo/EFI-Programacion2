import React from "react";
import LoginCSS from './Login.module.css'
import Logo from '../../../assets/image.png'
import { Image } from 'primereact/image';

const Login = () => {
  return (
    <div className={`flex justify-content-center align-items-center ${LoginCSS.fondoLogin}`}>
        <Image src={Logo} alt="Image" width="200" />
    </div>
  );
};

export default Login;
