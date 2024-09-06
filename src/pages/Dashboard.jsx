import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardCard from '../components/dashboard/DashboardCard'
import { MdSupervisedUserCircle } from 'react-icons/md'

function Dashboard() {
  return (
    <DashboardLayout>
        <div className='flex justify-evenly items-center w-full'> 
            <DashboardCard icon={<MdSupervisedUserCircle size={52} color='#66b5a3'/>} title="Total Patient" text="total this month" desc="last month patient's"/>
            <DashboardCard/>
            <DashboardCard/>
            <DashboardCard/>
        </div>
    </DashboardLayout>
  )
}

export default Dashboard