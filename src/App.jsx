import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ exact, component: C, name, path }, key) => {
          return (
            <Route
              key={key}
              path={path}
              name={name}
              exact={exact}
              element={<C />}
            />
          )
        })
        }
      </Routes>
    </BrowserRouter>
  );
}
