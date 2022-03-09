import React from "react";
import SideBarItem from "../siderbarItem";
import {Person, Profissional, Contact } from '../icons/index';

export default function SideBar(props) {

    const FirstItem = props.active1 ? 'active' : false;
    const SecondItem = props.active2 ? 'active' : false;
    const ThirdItem = props.active3 ? 'active' : false;

    return <>

        <div className="flex flex-row sm:flex-col sm:p-5 text-white ">

            <SideBarItem active={FirstItem} title="Pessoal" description="Se identifique" image={Person}/>
            <SideBarItem active={SecondItem} title="Profissional" description="Seu nível" image={Profissional}/>
            <SideBarItem active={ThirdItem} title="Contatos" description="Como te achar" image={Contact}/>
            
        </div>
    
    </>

}