import { BrowserRouter, Routes, Route } from "react-router-dom";

import routerConfig from "./config";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          {routerConfig.map(item=>(
              <Route path={item.path} key={item.path} element={<item.Component />} />
          ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
