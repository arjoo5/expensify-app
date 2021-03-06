import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
const expenses=[{
    id:'1',
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:109500,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{id:'3',
    description:'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(4,'days').valueOf()
}];

test('should set default state',()=>{
    const state=expenseReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state=expenseReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);    
});

test('should not remove expense if id not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state=expenseReducer(expenses,action);
    expect(state).toEqual(expenses);    
});

test('should add an expense',()=>{
    const expense={
        id:'109',
        description:'Laptop',
        note:'',
        createdAt:20000,
        amount:29500
    };
    const action ={
        type:'ADD_EXPENSE',
        expense
    };
    const state=expenseReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);

});

test('should edit an expense',()=>{
    const amount=120000;
    const action ={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    };
    const state=expenseReducer(expenses,action);
    expect(state[1].amount).toEqual(amount);

});

test('should not edit an expense if id not found',()=>{
    const amount=120000;
    const action ={
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount
        }
    };
    const state=expenseReducer(expenses,action);
    expect(state.length).toBe(expenses.length);

});

test('should set expenses',()=>{
    const action={
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    };
   const state=expenseReducer(expenses,action);
   expect(state).toEqual([expenses[1]]);
});