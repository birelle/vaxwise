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