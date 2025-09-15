//  This file is used to create custom input fields.
//  Refer to the comments for usage details of each component's specific parameters.
 
import React from "react";

// Create basic input field with custom focus color and placeholder. 
// Make sure to add a name
export function InputBasic({name, type, placeHolder, focusOutline, ...props}){
    return (
        <input 
                name=        {name}
                type=        {type} 
                placeholder= {placeHolder}
                className=   {`border bg-white text-gray-800 border-gray-300 rounded-md  focus:outline-none focus:border-${focusOutline} p-2`}
                {...props}
        />
    );
}

// Provides the same utility as InputBasic for mandatory fields.
export function InputBasicRequired({name, type, placeHolder, focusOutline, ...props}){
    return (
        <input 
                name=        {name} 
                type=        {type}
                placeholder= {placeHolder}
                className=   {`border bg-white text-gray-800 border-gray-300 rounded-md w-full focus:outline-none focus:border-${focusOutline} p-2`}
                required
                {...props}
        />
    );
}

export function InputBasicDisabled(name, placeholder, focusOutline, ...props){
    return (
        <input 
                name={name} 
                placeholder={placeholder}
                disabled
                className=  "border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:{focusOutline} p-2" 
                {...props}
        />
    );
}

export function InputBasicDisabledRequired(name, placeholder, focusOutline, ...props){
    return (
        <input 
                name={name} 
                placeholder={placeholder}
                disabled
                className=   "border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:{focusOutline} p-2" 
                required
                {...props}
        />
    );
}