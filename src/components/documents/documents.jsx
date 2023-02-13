import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { AppContext } from "../../context/context";

function Documents() {

    const [data, setData] = useState([])
    const [isModal,setIsModal,isUpdate, setIsUpdate,isModalData, setIsModalData] = useContext(AppContext)

    useEffect(() => {
        axios.get('https://machine-test.cloudmlmdemo.com/api/admin/tool-documents').then((response) => {
            console.log('response');
            console.log(response.data.data.data);
            setData(response.data.data.data)
        })
    }, [])

    const update =(file)=>{
        console.log('update');
        setIsUpdate(true) 
        setIsModalData(file)
    }


    return (
        <div className='text-white p-5'>
            <div class="relative overflow-x-auto">
                <button onClick={()=>{setIsModal(!isModal)}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New
                </button>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Active
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Updated At
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((item, index) => {
                                return (
                                    <tr onClick={()=>{update(item)}}
                                    class="bg-white border-b dark:bg-gray-800 cursor-pointer dark:border-gray-700">
                                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.id}</td>
                                        <td class="px-6 py-4">{item.title}</td>
                                        <td class="px-6 py-4">{item.active}</td>
                                        <td class="px-6 py-4">{item.created_at}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Documents