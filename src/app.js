/*import validator from 'validator';
console.log(validator.isEmail('test@gmail.com')); */
  
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route , Switch , Link , NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense } from './actions/expenses';
import {setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/style.scss';
import './firebase/firebase'

const store = configureStore();

// store.dispatch(addExpense({description:'waterbill',amount:788}));
// store.dispatch(addExpense({description:'gasbill',createdAt:1000}));
// store.dispatch(addExpense({description:'rent',amount:1788}));


// const state=store.getState();
// const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);
const jsx = (
    <Provider store={store} >
      <AppRouter />
    </Provider>
);


ReactDOM.render(jsx,document.getElementById('app'));

