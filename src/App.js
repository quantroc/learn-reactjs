import logo from './logo.svg';
//import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const producList = await productApi.getAll();
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      Home Page
      <p><Link to="/todos">Todo</Link></p>
      <p><Link to="/albums">Albums</Link></p>

      <p><NavLink to="todos" activeClassName='active-menu'>Todos</NavLink> </p>

      <Switch>
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
