import React, {useState} from "react";
import Layout from '../../../components/layout/index';
import Area from '../../../components/area/index';
import Header from "../../../components/header/index";
import Content from '../../../components/content/index';
import SideBar from "../../../components/sidebar";
import { useDispatch } from 'react-redux';


export default function Register1() {

    const [ name, setName ] = useState('');
    const dispatch = useDispatch();

    function NextStep() {

        if(name !== '') {

            dispatch({
                type: 'ADD_NAME',
                payload: name
            });
    
            window.location.href = '/register/2';

        } else {

            alert('Por favor, preencha os campos necessários!');
        }

    }


    return <>

        <Layout>

            <Area>

                <Header />

                <Content>

                    <SideBar active1 />

                    <div className="flex flex-col items-start justify-center p-5 text-white">

                        <small> Passo 1/3 </small>

                        <h1 className="font-bold text-2xl mt-3"> Vamos começar com seu nome </h1>

                        <small className="mt-2 mb-10">Preencha o campo abaixo com seu nome completo</small> 

                        <input className="rounded-lg focus:outline-0 h-10 mt-2 w-full text-black p-3 text-sm" type="text" placeholder="Digite o seu nome completo" value={name} onChange={(e) => setName(e.target.value)} />

                        <button className="transition hover:scale-105 w-full sm:w-auto p-3 pl-8 pr-8 rounded-full mt-5 bg-teal-500" onClick={()=> NextStep()}> Próximo </button>

                    </div>

                </Content>

            </Area>

        </Layout>

    </>

}