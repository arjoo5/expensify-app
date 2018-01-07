import React from 'react';
import { BrowserRouter , Route , Switch , Link , NavLink} from 'react-router-dom';

const Header =()=>(
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">CREATE Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">EDIT Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">HELP</NavLink>
    </div>
)

export default Header;