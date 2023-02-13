import React, { useContext, useState } from 'react'
import { AppContext } from "../../context/context";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";


function Modal() {

    const [isModal, setIsModal,] = useContext(AppContext)

    const [info, setInfo] = useState({
        title: "",
        sort_order: "",
        document_url: ''
    })

    const [message, setMessage] = useState('')


    const handleSubmit = () => {
        setMessage('')
        setInfo('')
        const Data = new FormData();
        for (let key in info) {
            Data.append(key, info[key])
        }

        console.log(Data);

        axios.post('https://machine-test.cloudmlmdemo.com/api/admin/tool-documents', Data).then((response) => {
            console.log(response);
            if (response.data.status) {
                setMessage(response.data.message)
                setInfo({...info, title: "",sort_order: "", document_url: ''})
            }
        })
    }


    return (
        isModal && <div className=''>
            <div className='fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#3e3e3e80]'></div>
            <AiFillCloseCircle onClick={() => { setIsModal(!isModal) }} className='fixed text-[30px] cursor-pointer top-[10%] right-[10%] text-white z-50' />
            <div className='bg-gray-400 rounded left-[30%] right-[30%] top-[30%] z-50 p-3 fixed '>
                <p className='mb-5 text-slate-50'>Add Document</p>
                <div>
                    <input type="text"
                        onChange={(e) => { setInfo({ ...info, title: e.target.value }) }}
                        id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doc Title" required />
                    <input type="text"
                        onChange={(e) => { setInfo({ ...info, sort_order: e.target.value }) }}
                        id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sort Order" required />
                    <input
                        onChange={(e) => { setInfo({ ...info, document_url: e.target.files[0] }) }}
                        type="file" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload Document" required />
                    <div>
                        <button onClick={() => { setIsModal(!isModal) }} class="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Cance
                        </button>
                        <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                        <p className='mt-4 text-green-700'>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal