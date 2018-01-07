
import React from 'react';
import { BrowserRouter , Route , Switch , Link , NavLink} from 'react-router-dom';
import ExpensifyDashboardPage from './../components/ExpensifyDashboardPage';
import Header from './../components/Header';
import NotFoundPage from './../components/NotFoundPage';
import HelpPage from './../components/HelpPage';
import EditExpensePage from './../components/EditExpensePage';
import AddExpensePage from './../components/AddExpensePage';   //../components/AddExpensePage






const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
      <Switch>
         <Route path="/" component={ExpensifyDashboardPage} exact={true} />
         <Route path="/create" component={AddExpensePage} />
         <Route path="/edit/:id" component={EditExpensePage} />
         <Route path="/help" component={HelpPage} />
         <Route component={NotFoundPage} />
      </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;