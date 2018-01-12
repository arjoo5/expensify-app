import React from 'react';
import { BrowserRouter , Route , Switch , Link , NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'
export const Header =({startLogout})=>(
    <div>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">CREATE Expense</NavLink>
        {/* <NavLink to="/edit" activeClassName="is-active">EDIT Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">HELP</NavLink> */}
        <button onClick={startLogout}>LogOut</button>
    </div>
);

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);