import Home from '../pages/Home'
import About from '../pages/About';


const routes = [
  { path: '/', element: Home, default: true, navInside: true },
  { path: '/acerca-de-nosotros', element: About, default: true, navInside: true },
];

export default routes;
