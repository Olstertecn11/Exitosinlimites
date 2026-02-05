import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Layout from '../components/layout';
import ProtectedRoute from '../auth/ProtectedRoute'
import AdminNav from '../components/admin/nav';

export default function RouterManager() {
  return (
    <Router>
      <Routes>
        {routes.public.map((route, index) => (
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
        {
          routes.private?.map((route, index) => {
            const Page = route.element;
            const roles = route.roles || ["Administrador"];

            const element = (
              <ProtectedRoute roles={roles}>
                <AdminNav >
                  <Page />
                </AdminNav >
              </ProtectedRoute>
            );

            return <Route key={`adm-${index}`} path={route.path} element={element} />;
          })
        }

      </Routes>
    </Router>
  );
}
