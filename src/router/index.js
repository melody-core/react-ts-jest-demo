import { BrowserRouter, Routes, Route } from "react-router-dom";

import routerConfig from "./config";

export default () => {
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
