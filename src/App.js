import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

import RoutesComponent from "./Components/RoutesComponent";
import Header from "./Components/Header";
import Modal from "./Components/Modal";

import "./Styles/main.css"

import ROUTES from "./Routes";
const routes = ROUTES.PUBLIC_ROUTES;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal=(event)=> {
    if(event.target.innerText==='Contact us'){
      setModalOpen(true)
    }
  }

  const closeModal=(event)=> {
    if(event.target.className==='modal-section' || 
    event.target.className==='modal-image-close' ||
    event.target.className==='modal-button-close')
    setModalOpen(false)
  }
  
  const onKeyDown = (event) => {
    console.log(event.key==='Escape');
  }

  return (
    < >
      <Header onClick={openModal}/>
      <RoutesComponent>
        <Routes>
          {routes.map(({name, path, component}) => {
            return <Route path ={path} element={component} key={name}/>
          })}
          <Route path = "*" element={<Navigate replace to={routes[0].path}/>}/>
        </Routes>
      </RoutesComponent>
      <Modal modalOpen={modalOpen} closeModal={closeModal} onKeyDown={onKeyDown}/>
    </>
  );
}

export default App;
