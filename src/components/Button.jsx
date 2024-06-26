import React from "react";

function Button({content,onClick}){
    return(
    <button className="w-40 border-2 h-8 border-gray-300 font-bold text-white bg-green-600 rounded-md " onClick={onClick}>
        {content}
    </button>
    )
}

export default Button;