import React, {useState} from 'react'
import SidebarItem from '../SidebarItem'
// import { SIDEBAR_ITEM } from '../../mocks/SidebarItemMock'
import { MdDashboard } from "react-icons/md"

function Sidebar() {
    const [activeItem, setActiveItem] = useState('Dashboard');

 const SIDEBAR_ITEM = [
    {
        title: 'Dashboard',
        icon: <MdDashboard size={25}/>,
        path: '/'
    },
    {
        title: 'Patient',
        icon: <MdDashboard size={25}/>,
        path: '/recipients'
    },
    {
        title: 'Doctor',
        icon: <MdDashboard size={25}/>,
        path: '/doctor'
    },
    {
        title: 'Vaccine',
        icon: <MdDashboard size={25}/>,
        path: '/vaccines'
    },
    {
        title: 'Hospital',
        icon: <MdDashboard size={25}/>,
        path: '/hospital'
    },
]
  return (
    <>
    <div className='flex justify-center items-center'>

     <div className='w-24 h-24 text-4xl mt-5 text-white flex justify-center items-center rounded-full uppercase bg-primary'>
            vm
        </div>
    </div>
    <div className='flex flex-col mt-12'>
       
        <div className='flex flex-col f gap-2 px-5'>
            {SIDEBAR_ITEM.map((item, index) => (
                <SidebarItem 
                title={item.title}key={index} 
                icon={item.icon}
                to={item.path}
                active={activeItem === item.title} 
                onClick={() => setActiveItem(item.title)}
                />
            ))}
        </div>
    </div>
    </>
  )
}

export default Sidebar