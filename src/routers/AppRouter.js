
import React from 'react';
import {Router , Route , Switch , Link , NavLink} from 'react-router-dom';
import ExpensifyDashboardPage from './../components/ExpensifyDashboardPage';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from './../components/NotFoundPage';
import EditExpensePage from './../components/EditExpensePage';
import AddExpensePage from './../components/AddExpensePage';   //../components/AddExpensePage
import LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history=createHistory();



const AppRouter=()=>(
    <Router history={history}>
    <div>
    
      <Switch>
         <PublicRoute path="/" component={LoginPage} exact={true} />        
         <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage}  />
         <PrivateRoute path="/create" component={AddExpensePage} />
         <PrivateRoute path="/edit/:id" component={EditExpensePage} />
         <Route component={NotFoundPage} />
      </Switch>
    </div>
    </Router>
);

export default AppRouter;