import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomerTable from '../components/CustomerTable'
import BillGenerator from '../components/BillGenerator'

const Dashboard = () => {
    const [isActive,setIsActive] = useState(0)
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="flex">
                <div className={` ${open ? "w-64" : "w-20 "} bg-base-200 h-screen relative duration-300 border-r border-gray-800`}>
                    <Sidebar isActive={isActive} setIsActive={setIsActive} open={open} setOpen={setOpen}/>
                </div>
                <div className={`h-screen flex flex-col lg:w-full ${open ? 'w-[77%]' : 'w-[90%]'}`}>
                    <Navbar/>
                        {isActive === 0 ?<CustomerTable/> :<BillGenerator/> }
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Dashboard