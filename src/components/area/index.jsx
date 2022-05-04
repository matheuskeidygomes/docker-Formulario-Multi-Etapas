import React from "react";

export default function Area(props){ 

    return <>

        <div className="flex flex-col justify-center rounded-xl bg-gray-700">
            {props.children}
        </div>
    
    </>

}