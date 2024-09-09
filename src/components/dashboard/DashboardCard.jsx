<<<<<<< HEAD
import { Card } from 'primereact/card'
import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

function DashboardCard({title, text, desc, icon}) {
  return (
    <div className='w-64'>
        <Card title={title}>
            <div className="flex justify-between my-4 items-center">

            <p>{text}</p>
            {icon}
            </div>
            <div className='mt-4'>
                <p>{desc}</p>
            </div>
        </Card>
    </div>
  )
}

export default DashboardCard
=======
import { Card } from "primereact/card";
import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

function DashboardCard({ title, text, desc, icon }) {
  return (
    <div className=" bg-white rounded-xl border-[1px] border-border p-5">
      <div>
        <div className="flex gap-4 items-center">
          <div className="bg-secondary p-2 rounded-md w-10 h-10 flex justify-center items-center">{icon}</div>
          <p className="text-sm font-medium">{text}</p>
        </div>
        <div className="mt-8 w-full px-4 bg-tetiary p-8 rounded-lg">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
>>>>>>> main
