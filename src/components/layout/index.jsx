import React from "react";

export default function Layout(props){ 

    return <>

        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-800 p-3 sm:p-10">
            {props.children}
        </div>
    
    </>

}