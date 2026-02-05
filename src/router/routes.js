import Home from '../pages/Home'
import About from '../pages/About';
import HighImpactConferences from '../pages/Services/high_impact_conferences';
import PersonalTrainingService from '../pages/Services/personal_training_service';
import MotivationLeadership from '../pages/Services/motivation_and_leadership';
import Contact from '../pages/Contact';

import GlassLogin from '../pages/admin/Login';
import EventManager from '../pages/admin/EventManager';
import BooksManager from '../pages/admin/BooksManager';
import Sales from '../pages/admin/Sales'



const routes = {
  public: [
    { path: '/', element: Home, default: true, navInside: true },
    { path: '/acerca-de-nosotros', element: About, default: true, navInside: true },
    { path: '/servicios/conferencias-alto-impacto', element: HighImpactConferences, default: true, navInside: true },
    { path: '/servicios/entrenamiento-personal', element: PersonalTrainingService, default: true, navInside: true },
    { path: '/servicios/motivacion&liderazgo', element: MotivationLeadership, default: true, navInside: true },
    { path: '/contacto', element: Contact, default: true, navInside: true },
  ],
  private: [
    { path: '/admin/login', element: GlassLogin, default: true, navInside: true },
    { path: '/admin/eventos', element: EventManager, default: true, navInside: true },
    { path: '/admin/inscripciones', element: Contact, default: true, navInside: true },
    { path: '/admin/libros', element: BooksManager, default: true, navInside: true },
    { path: '/admin/ventas', element: Sales, default: true, navInside: true },
  ]
};

export default routes;
