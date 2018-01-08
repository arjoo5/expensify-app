import selectExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';
const expenses=[{
    id:1,
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},{
    id:2,
    description:'Rent',
    note:'',
    amount:109500,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{id:3,
    description:'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(4,'days').valueOf()
}];

test('should return 0 if no expenses',()=>{
    const res=selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense',()=>{
    const res=selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up multiple expenses',()=>{
    const res=selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});