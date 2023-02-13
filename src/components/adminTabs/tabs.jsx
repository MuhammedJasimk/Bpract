import React from 'react'
import { AiFillCloud, AiFillDashboard } from "react-icons/ai";

function tabs() {
    return (
        <div>
            <div>
                <AiFillCloud className='text-blue-300 text-[30px]' />

                <div className='drop-shadow-sm p-2 flex bg-gray-500 mt-[25px] rounded'>
                    <div className='bg-black rounded-full w-[40px] h-[40px] mr-3'>

                    </div>
                    <div className='text-white text-[12px]'>
                        <p className='font-bold'>admin</p>
                        <p>miAdmin</p>
                    </div>
                </div>

                <div className='flex text-white items-center mt-3'>
                    <div className='mr-2'>
                        <AiFillDashboard />
                    </div>
                    <div>Dashboard</div>
                </div>
               
                <div className='flex text-white items-center mt-3'>
                    <div className='mr-2'>
                        <AiFillDashboard />
                    </div>
                    <div>Dashboard</div>
                </div>


                <div className='flex text-white items-center mt-3'>
                    <div className='mr-2'>
                        <AiFillDashboard />
                    </div>
                    <div>Dashboard</div>
                </div>


            </div>
        </div>
    )
}

export default tabs