// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route , Outlet } from "react-router-dom";
import Layout from "./pages/layout";
import Documentaaa from "./components/documents/documents";
import {AppContext} from "./context/context";
import Modal from "./components/modal/modal";
import UpdateModal from "./components/updateModal/updateModal";


function App() {

  const [isModal, setIsModal] = useState(false)
  const [isModalData, setIsModalData] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)

  return (
    <BrowserRouter>
    <AppContext.Provider value={[isModal,setIsModal,isUpdate, setIsUpdate,isModalData, setIsModalData]}>
      <Modal/>
      <UpdateModal/>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Documentaaa/>} />
          <Route path="modal" element={<Modal />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
