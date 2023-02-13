import React, { useState, useContext ,useEffect} from 'react'
import { AppContext } from "../../context/context";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

function UpdateModal() {


    const [info, setInfo] = useState({
        title: "",
        sort_order: "",
        document_url: '',
        _method:'PUT'
    })


    const [message, setMessage] = useState('')
    const [isModal, setIsModal, isUpdate, setIsUpdate, isModalData, setIsModalData] = useContext(AppContext)

    const handleSubmit = () => {
        setMessage('')
        setInfo('')
        const Data = new FormData();
        for (let key in info) {
            Data.append(key, info[key])
        }

        console.log(Data);

        axios.post(`https://machine-test.cloudmlmdemo.com/api/admin/tool-documents/${isModalData.id}`, Data).then((response) => {
            console.log(response);
            if (response.data.status) {
                setMessage(response.data.message)
            }
        })
    }


    useEffect(() => {
        console.log(isModalData);
        setInfo({ ...info, title: isModalData.title, sort_order: isModalData.sort_order,document_url:isModalData.doc_url })
    }, [isUpdate])



    return (
        isUpdate && <div className=''>
            <div className='fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#3e3e3e80]'></div>
            <AiFillCloseCircle onClick={() => { setIsUpdate(!isUpdate) }} className='fixed text-[30px] cursor-pointer top-[10%] right-[10%] text-white z-50' />
            <div className='bg-gray-400 rounded left-[30%] right-[30%] top-[30%] z-50 p-3 fixed '>
                <p className='mb-5 text-slate-50'>Add Document</p>
                <div>
                    <input type="text"
                        value={info.title}
                        onChange={(e) => { setInfo({ ...info, title: e.target.value }) }}
                        id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doc Title" required />
                    <input type="text"
                        value={info.sort_order}
                        onChange={(e) => { setInfo({ ...info, sort_order: e.target.value }) }}
                        id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sort Order" required />
                    <input
                        // value={info.document_url}
                        onChange={(e) => { setInfo({ ...info, document_url: e.target.files[0] }) }}
                        type="file" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload Document" required />
                    <div>
                        <button onClick={() => { setIsUpdate(!isUpdate) }} class="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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

export default UpdateModal