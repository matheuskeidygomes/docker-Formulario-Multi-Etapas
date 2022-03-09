import React from "react";


export default function Content(props) {
    
    return<>

        <div className="flex flex-col items-center sm:items-start sm:flex-row bg-gray-500 p-5 rounded-b-xl">
            {props.children}
        </div>
    
    </>

}