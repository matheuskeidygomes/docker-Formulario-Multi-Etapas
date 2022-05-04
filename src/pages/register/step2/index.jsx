import React, { useState } from "react";
import Layout from '../../../components/layout/index';
import Area from '../../../components/area/index';
import Header from "../../../components/header/index";
import Content from '../../../components/content/index';
import SideBar from "../../../components/sidebar";
import PartyIcon from '../../../components/icons/party.png';
import CoolIcon from '../../../components/icons/cool.png';
import { useDispatch } from 'react-redux';

export default function Register2() {

    const [experience, setExperience] = useState('');
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const Marked1 = select1 ? 'border-gray-800' : 'border-gray-400';
    const Marked2 = select2 ? 'border-gray-800' : 'border-gray-400';
    const dispatch = useDispatch();

    function NextStep() {

        if (experience !== '') {

            dispatch({
                type: 'ADD_EXPERIENCE',
                payload: experience
            });

            window.location.href = '/register/3';

        } else {
            alert('Por favor, selecione seu nível de experiência!')
        }
    }

    function PrevStep() {
        window.location.href = '/';
    }

    function setSelected1() {
        setExperience('Beginner');
        setSelect2(false);
        setSelect1(true);
    }

    function setSelected2() {
        setExperience('Programmer');
        setSelect1(false);
        setSelect2(true);
    }

    return <>

        <Layout>

            <Area>

                <Header />

                <Content>

                    <SideBar active2 />

                    <div className="flex flex-col items-start justify-center p-5 text-white">

                        <small> Passo 2/3 </small>

                        <h1 className="font-bold text-2xl mt-3"> Qual seu nível de experiência? </h1>

                        <small className="mt-2">Escolha a opção que melhor condiz com seu estado profissional atual</small>

                        <div className={`${Marked1} transition hover:scale-105 flex items-center border-2 rounded-lg w-full p-3 mt-10 hover:cursor-pointer`} onClick={() => setSelected1()}>

                            <div className="flex hidden sm:block justify-center items-center bg-red-400 p-2 h-10 w-10 rounded-full mr-3">
                                <img src={PartyIcon} alt="" />
                            </div>

                            <div>
                                <h1 className="font-bold"> Sou Iniciante </h1>
                                <small className="text-light">Comecei a programar há menos de 2 anos.</small>
                            </div>

                        </div>

                        <div className={`${Marked2} transition hover:scale-105 flex items-center border-2 rounded-lg w-full p-3 mt-3 hover:cursor-pointer`} onClick={() => setSelected2()}>

                            <div className="flex hidden sm:block justify-center items-center bg-red-400 p-2 h-10 w-10 rounded-full mr-3">
                                <img src={CoolIcon} alt="" />
                            </div>

                            <div>
                                <h1 className="font-bold"> Sou Programador </h1>
                                <small className="text-light">Comecei a programar há 2 anos ou mais.</small>
                            </div>

                        </div>

                        <div className="flex flex-col w-full sm:w-auto sm:flex-row">

                            <button className="transition hover:scale-105 w-full sm:w-auto p-3 pl-8 pr-8 mt-5" onClick={() => PrevStep()}> Voltar </button>

                            <button className="transition hover:scale-105 w-full sm:w-auto p-3 pl-8 pr-8 rounded-full mt-5 bg-teal-500" onClick={() => NextStep()}> Próximo </button>

                        </div>

                    </div>

                </Content>

            </Area>

        </Layout>

    </>

}