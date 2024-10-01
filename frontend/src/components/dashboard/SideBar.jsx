import React, {useState} from 'react'
import SidebarItem from '../SidebarItem'
// import { SIDEBAR_ITEM } from '../../mocks/SidebarItemMock'
import { MdDashboard, MdOutlineChildCare, MdOutlineVaccines } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { LiaUserNurseSolid } from "react-icons/lia";
import { TbHospitalCircle } from "react-icons/tb";
import { BsBarChartSteps } from "react-icons/bs";

function Sidebar() {
    const [activeItem, setActiveItem] = useState('Dashboard');

 const SIDEBAR_ITEM = [
    {
        title: 'Dashboard',
        icon: <RxDashboard size={25}/>,
        path: '/'
    },
    {
        title: 'Patient',
        icon: <MdOutlineChildCare size={25}/>,
        path: '/recipients'
    },
    {
        title: 'healthcare',
        icon: <LiaUserNurseSolid size={25}/>,
        path: '/doctor'
    },
    {
        title: 'Vaccine',
        icon: <MdOutlineVaccines size={25}/>,
        path: '/vaccine.list'
    },
    {
        title: 'vaccination phase',
        icon: <BsBarChartSteps size={25}/>,
        path: '/vaccination.phase'
    },
    {
        title: 'Hospital',
        icon: <TbHospitalCircle size={25}/>,
        path: '/hospital'
    },
]
  return (
    <>
    <div className='flex px-5'>

     <div className='w-full  text-4xl mt-5 text-white flex j rounded-lg  p-3 uppercase bg-primary'>
            vaxwise
        </div>
    </div>
    <div className='flex flex-col mt-12'>
       
        <div className='flex flex-col f gap-2 px-5'>
            {SIDEBAR_ITEM.map((item, index) => (
                <SidebarItem 
                title={item.title}key={index} 
                icon={item.icon}
                to={item.path}
                active={activeItem == item.title} 
                onClick={() => setActiveItem(item.title)}
                />
            ))}
        </div>
    </div>
    </>
  )
}

export default Sidebar