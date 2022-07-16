import React from 'react';
import { Routes, Route } from 'react-router-dom';

//====== Admin =====================================
import TrangQuanTri from './Admin Page/Trang_Quan_Tri';

import { publicRoutes, privateRoutes } from './Routers';

const App = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>

      <Routes>
        {privateRoutes.map((route, index) => {
          const Layout = route.layout || TrangQuanTri;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
