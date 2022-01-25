import { Route, Routes, Navigate } from "react-router-dom";

import RoutesComponent from "./Components/RoutesComponent";
import Header from "./Components/Header";

import "./Styles/main.css"

import ROUTES from "./Routes";
const routes = ROUTES.PUBLIC_ROUTES;

const App = () => {
  return (
    < >
      <Header/>
      <RoutesComponent>
        <Routes>
          {routes.map(({name, path, component}) => {
            return <Route path ={path} element={component} key={name}/>
          })}
          <Route path = "*" element={<Navigate replace to={routes[0].path}/>}/>
        </Routes>
      </RoutesComponent>
    </>
  );
}

export default App;
