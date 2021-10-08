import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';

function App() {
  const admin = useSelector((state) => state.user.currentUser);
  // JSON.parse(JSON.parse(localStorage.gtItem('persist:root')).user);

  console.log(admin);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {!admin ? <Login /> : <Redirect to="/" />}
        </Route>
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              {!admin ? <Redirect to="/login" /> : <Home />}
            </Route>
            <Route path="/users">
              {!admin ? <Redirect to="/login" /> : <UserList />}
            </Route>
            <Route path="/user/:userId">
              {!admin ? <Redirect to="/login" /> : <User />}
            </Route>
            <Route path="/newUser">
              {!admin ? <Redirect to="/login" /> : <NewUser />}
            </Route>
            <Route path="/products">
              {!admin ? <Redirect to="/login" /> : <ProductList />}
            </Route>
            <Route path="/product/:productId">
              {!admin ? <Redirect to="/login" /> : <Product />}
            </Route>
            <Route path="/newProduct">
              {!admin ? <Redirect to="/login" /> : <NewProduct />}
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
