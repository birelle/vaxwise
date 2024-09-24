import React from "react";
import {Link} from 'react-router-dom';

function SidebarItem({ title, icon, active, onClick, to }) {
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`flex gap-4 p-4 w-full items-center hover:bg-secondary rounded-lg  hover:cursor-pointer  ${
          active ? "bg-secondary" : ""
        }`}
      >
        <div className="text-[#66b5a3]">{icon}</div>
        <div className="capitalize">{title}</div>
      </div> 
    </Link>
  );
}

export default SidebarItem;
