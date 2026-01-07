import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Layout from '../components/layout';

export default function RouterManager() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout isNavInside={route.navInside || false}>
                <route.element />
              </Layout>
            }
            index={route.default || false}
          />
        ))}
      </Routes>
    </Router>
  );
}
