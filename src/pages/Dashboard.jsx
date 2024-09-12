import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardCard from '../components/dashboard/DashboardCard'
<<<<<<< HEAD
import { MdSupervisedUserCircle } from 'react-icons/md'
=======
import ChartComponent from '../components/ChartComponent'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { LuUsers } from 'react-icons/lu'
>>>>>>> main

function Dashboard() {
  return (
    <DashboardLayout>
<<<<<<< HEAD
        <div className='flex justify-evenly items-center w-full'> 
            <DashboardCard icon={<MdSupervisedUserCircle size={52} color='#66b5a3'/>} title="Total Patient" text="total this month" desc="last month patient's"/>
            <DashboardCard/>
            <DashboardCard/>
            <DashboardCard/>
=======
        <div className='flex justify-between mt-5 items-center w-full'> 
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="Total Patient" text="total this month" desc="last month patient's"/>
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="Total Patient" text="total this month" desc="last month patient's"/>
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="Total Patient" text="total this month" desc="last month patient's"/>
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="Total Patient" text="total this month" desc="last month patient's"/>
            
        </div>
        <div className='w-full rounded-lg bg-white my-12 p-8'>
            <ChartComponent/>
>>>>>>> main
        </div>
    </DashboardLayout>
  )
}

export default Dashboard