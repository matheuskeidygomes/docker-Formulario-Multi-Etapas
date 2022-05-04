import React from "react";

export default function SideBarItem(props) {

    const active = props.active ? 'bg-teal-500' : 'bg-gray-400'

    return <>

        <div className="flex flex-row justify-around items-center">

            <div className="hidden sm:block p-3 w-28">

                <h1 className="font-bold"> {props.title} </h1>
                <small className="text-light"> {props.description} </small>

            </div>

            <div className="m-3">

                <div className={`${active} rounded-full p-2`}>
                    {props.image}
                </div>
                
            </div>

        </div>

    </>

}