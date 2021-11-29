import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './CarDetails';
import NotFound from './NotFound';
import Rent from './Rent';
import AdminPage from './AdminPage';
import RentaCar from './Rentacar';
import ConfirmPage from './ConfirmPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/rentacar/:car_id">
              <RentaCar/>
            </Route>
            <Route path="/confirmpage/:rent_id">
              <ConfirmPage/>
            </Route>
            <Route path="/adminpage">
              <AdminPage/>
            </Route>
            <Route path="/rent">
              <Rent/>
            </Route>
            <Route path="/cars/:car_id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
    
}

export default App;
