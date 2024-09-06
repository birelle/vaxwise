import React from 'react'

function SidebarItem({title, icon}) {
  return (
    <div className='flex gap-4 p-4 w-full items-center hover:bg-secondary rounded-lg  hover:cursor-pointer'>
        <div className='text-[#66b5a3]'>
            {icon}
        </div>
        <div className='capitalize'>{title}</div>
    </div>
  )
}

export default SidebarItem