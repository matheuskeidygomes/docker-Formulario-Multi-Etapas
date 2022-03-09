import React, { useState, useEffect } from "react";
import Layout from '../../../components/layout/index';
import Area from '../../../components/area/index';
import Header from "../../../components/header/index";
import Content from '../../../components/content/index';
import SideBar from "../../../components/sidebar";
import { useDispatch, useSelector } from 'react-redux';

export default function Register3() {

    const [email, setEmail] = useState('');
    const [github, setGitHub] = useState('');
    const userData = useSelector(state => state.UserInfoReducer);
    const dispatch = useDispatch();

    function FinishStep() {

        if (email !== '' && github !== '') {

            dispatch({
                type: 'ADD_EMAIL',
                payload: email
            });

            dispatch({
                type: 'ADD_GITHUB',
                payload: github
            });

        } else {

            alert('Por favor, preencha os campos necessários!')
        }
    }

    function PrevStep() {
        window.location.href = '/register/2';
    }

    useEffect(()=>{
        console.log(userData);
    },[userData]);

    return <>

        <Layout>

            <Area>

                <Header />

                <Content>

                    <SideBar active3 />

                    <div className="flex flex-col items-start justify-center p-5 text-white">

                        <small> Passo 3/3 </small>

                        <h1 className="font-bold text-2xl mt-3"> Como podemos achar você? </h1>

                        <small className="mt-2">Preencha os campos abaixo com seus dados de contato</small>

                        <input className="rounded-lg focus:outline-0 h-10 mt-10 w-full p-3 text-black text-sm" placeholder="Qual o seu E-mail?" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input className="rounded-lg focus:outline-0 h-10 mt-4 w-full p-3 text-black text-sm" placeholder="Qual o seu Github?" type="text" value={github} onChange={(e) => setGitHub(e.target.value)} />

                        <div className="flex flex-col w-full sm:w-auto sm:flex-row">

                            <button className="transition hover:scale-105 w-full sm:w-auto p-3 pl-8 pr-8 mt-5" onClick={() => PrevStep()}> Voltar </button>

                            <button className="transition hover:scale-105 w-full sm:w-auto p-3 pl-8 pr-8 rounded-full mt-5 bg-teal-500" onClick={() => FinishStep()}> Próximo </button>

                        </div>

                    </div>

                </Content>

            </Area>

        </Layout>

    </>

}