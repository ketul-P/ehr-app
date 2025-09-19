//  This file is used to create custom input fields.
//  Refer to the comments for usage details of each component's specific parameters.

import React from "react";


export function PrimaryButton({ value }) {
    return (
            <button
                type="button"
                className={`w-full rounded bg-emerald-700 text-white p-2 hover:bg-emerald-200 hover:text-emerald-500 hover:border-emerald-500`}
            >
            {value}
            </button>
    );
}

export function SecondaryButton({ value }){
    return (
            <button 
                type={value} 
                className={`w-full rounded bg-emerald-700 text-white p-2 hover:bg-white hover:text-emerald-500 hover:border-emerald-500`}
            >
            {value}
            </button>)
}

export function CancelButton({value}){
    return (
            <button 
                type={value} 
                className={`w-full rounded bg-emerald-400 text-emerald-800 p-2 hover:bg-red-400 hover:text-white`}
            >
            {value}
            </button>)
}
