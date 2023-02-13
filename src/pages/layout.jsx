import React from 'react'
import {Outlet } from "react-router-dom";
import Nav from "../components/navbar/navbar";
import Tabs from "../components/adminTabs/tabs";

function layout() {
  return (
    <div className='min-h-[100vh] flex'>
        <div className='bg-gray-800 w-[20%] min-h-[100vh] shadow-xl p-4'>
       <Tabs/>
        </div>
        <div className='w-[80%]'>
            <Nav/>
            <Outlet/>
        </div>
    </div>
  )
}

export default layout