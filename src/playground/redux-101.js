import {createStore } from 'redux';

const incrementCount=( { incrementBy=1} ={} )=>({
    type:'INCREMENT',
    incrementBy:incrementBy

});

const decrementCount=( { decrementBy=1}={}  )=>({
    type:'DECREMENT',
    decrementBy:decrementBy

});

const setCount=( { count=0}={}  )=>({
    type:'SET',
    count:count

});
const resetCount=( )=>({
    type:'RESET',

});

const countReducer = (state= { count:0 },action)=> {
    switch (action.type) {
        case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
         };
         case 'DECREMENT':
         return {
            count: state.count - action.decrementBy
         };
         case 'RESET':
         return {
            count: 0
         }
         case 'SET':
         return {
            count: action.count
         };
         default:
           return state;
     }
    });
    store.subscribe(()=>{
        console.log(store.getState());
    };
const store=createStore(countReducer);


// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// });

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy:5}));
store.dispatch(decrementCount());
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy:5
// });
// store.dispatch({
//     type:'INCREMENT'
// });

store.dispatch(setCount({count:101}));
store.dispatch(setCount());
// store.dispatch({
//     type:'RESET'
// });




