import { Route, Routes, Navigate, Router } from "react-router-dom";
import RoutesComponent from "./Components/RoutesComponent";

import ROUTES from "./Routes";
const routes = ROUTES.PUBLIC_ROUTES;

const App = () => {
  return (
    < >
      <div>
        <RoutesComponent>
          <Routes>
            {routes.map(({name, path, component}) => {
              return <Route path ={path} element={component} key={name}/>
            })}
            <Route path = "*" element={<Navigate replace to={routes[0].path}/>}/>
          </Routes>
        </RoutesComponent>
      </div>
    </>
  );
}

export default App;
