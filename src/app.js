/*import validator from 'validator';
console.log(validator.isEmail('test@gmail.com')); */
  
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route , Switch , Link , NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {startSetExpenses } from './actions/expenses';
import {login,logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';

import AppRouter,{history} from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/style.scss';
import {firebase} from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

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
let hasRendered=false;
const renderApp=()=>{
  if(!hasRendered){
    ReactDOM.render(jsx,document.getElementById('app'));
    hasRendered=true;
  }
};
ReactDOM.render(<LoadingPage/>,document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(()=>{
     renderApp();
     if(history.location.pathname==='/'){
       history.push('/dashboard');
     }
     console.log('log in');
     });
    }else {
    store.dispatch(logout())
    renderApp();
    history.push('/');
    console.log('log out');
  }
});


