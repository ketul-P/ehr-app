import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdminDashboardTile({ title, icon, buttonText, infoText }) {
  return (
    <div className="flex flex-col items-center p-4 h-[16em] rounded-md bg-emerald-200 shadow-md font-mono hover:bg-emerald-100 hover:text-white">
      <FontAwesomeIcon icon={icon} className="text-md text-emerald-500 mt-8" />
      
      <h2 className="text-xs md:text-xl lg:text-2xl font-mono font-semibold text-emerald-500 mt-2">
        {title}
      </h2>
      
      <button className="bg-emerald-400 rounded-md p-2 my-4 w-5/6 shadow-lg hover:bg-white hover:text-violet-600">
        {buttonText}
      </button>
      
      <p className="bg-emerald-100 w-5/6 p-2 rounded-md text-xs lg:text-sm text-center text-emerald-600">
        {infoText}
      </p>
    </div>
  );
}
