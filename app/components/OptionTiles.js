import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function AdminDashboardTile({ title, icon, buttonText, onClick, infoText}) {
  return (
    <div className="flex flex-col items-center p-4 h-[20em] rounded-md bg-emerald-200 shadow-md font-mono hover:bg-emerald-100 hover:text-white">
      <FontAwesomeIcon icon={icon} className="text-6xl text-emerald-600 mt-10" />
      
      <h2 className="text-base md:text-l lg:text-xl font-mono font-semibold text-emerald-600 mt-2 mb-4">
        {title}
      </h2>
      
      <button className="bg-emerald-400 rounded-md p-2 my-4 w-5/6 shadow-lg hover:bg-white hover:text-emerald-600" onClick={onClick}>
        {buttonText}
      </button>
      
      <p className="bg-emerald-100 w-5/6 p-2 rounded-md text-xs lg:text-sm text-center text-emerald-600">
        {infoText}
      </p>
    </div>
  );
}
