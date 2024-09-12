import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardCard from '../components/dashboard/DashboardCard'
import ChartComponent from '../components/ChartComponent'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { LuUsers } from 'react-icons/lu'

function Dashboard() {
  return (
    <DashboardLayout>
        <div className='flex justify-between mt-5 items-center w-full'> 
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="Total Patient" text="Total patient" desc="Registered"/>
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="vaccinated" text="Patient vaccinated " desc="Total vaccinated"/>
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="total of this month" text="total this month" desc="this month patient's"/>
            <DashboardCard icon={<LuUsers size={50} color='#66b5a3'/>} title="Total Patient" text="total last month" desc="Total patient's"/>
            
        </div>
        <div className='w-full rounded-lg bg-white my-12 p-8'>
            <ChartComponent/>
        </div>
    </DashboardLayout>
  )
}

export default Dashboard