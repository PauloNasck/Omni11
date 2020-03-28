import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
        <>
        
        <div className="container">            
            

            <section className="form">
                <img src={logo} alt= "logo"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder= 'Sua Id'/>
                    <button type="submit">Entrar</button>
                    <a href="/registrer">
                        <FiLogIn size={20} color="#E02041"/>
                         NÃO TENHO CADASTRO</a>
                </form>
                
            </section>
            
            <img src={heroesImg} alt= "Heroes"/>
            
        </div>           
                       
            
        
        </>
    );
}