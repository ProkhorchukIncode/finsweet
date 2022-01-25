import { Route, Routes, Navigate, Router } from "react-router-dom";

import RoutesComponent from "./Components/RoutesComponent";
import Container from "./Components/Container";

import ROUTES from "./Routes";
const routes = ROUTES.PUBLIC_ROUTES;

const App = () => {
  return (
    < >
      <Container>
        <RoutesComponent>
          <Routes>
            {routes.map(({name, path, component}) => {
              return <Route path ={path} element={component} key={name}/>
            })}
            <Route path = "*" element={<Navigate replace to={routes[0].path}/>}/>
          </Routes>
        </RoutesComponent>
      </Container>
    </>
  );
}

export default App;
