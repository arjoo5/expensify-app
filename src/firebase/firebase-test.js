import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBh6F8uJnf_qOr6Nt1QewCdSQQyliDllqM",
    authDomain: "expensify-app-7bdf9.firebaseapp.com",
    databaseURL: "https://expensify-app-7bdf9.firebaseio.com",
    projectId: "expensify-app-7bdf9",
    storageBucket: "expensify-app-7bdf9.appspot.com",
    messagingSenderId: "973084335427"
  };

  firebase.initializeApp(config);
   const database=firebase.database();

//    database.ref('expenses').push({
//        description:'Rent',
//        amount:444,
//        note:'this is last',
//        createdAt:8989
//    });
database.ref('expenses').on('value',(snapshot)=>{
    const expenses=[];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
 });
 //Child removed
  database.ref('expenses').on('child_removed',(snapshot)=>{
     console.log(snapshot.key,snapshot.val());
  });
//Child changed
database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
 });

//Child added
database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
 });
//    database.ref('expenses')
//    .once('value')
//    .then((snapshot)=>{
//       const expenses=[];
//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//               id:childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//    });
//    database.ref('expenses').push({
//     description:'COffee',
//     amount:44,
//     note:'this is last',
//     createdAt:89890
// });

// database.ref('expenses').push({
//     description:'maggi',
//     amount:4,
//     note:'this is last',
//     createdAt:8900
// });

   
   

//to store list bases data arrays(since it does not supports arrays)
// database.ref('notes').push({
//     title:'Course',
//     body:'MCA'
// });
// database.ref('notes').push({
//     title:'DBMS',
//     body:'SQL'
// });
// database.ref('notes').push({
//     title:'JAVA',
//     body:'Project'
// });

//   database.ref().set({
//       name:'Arjoo Gupta',
//       age:23,
//       isSingle:false,
//       location:{
//           city:'Allahabad',
//           country:'India'
//       }
//   }).then(()=>{
//       console.log('DAta is saved');
//   }).catch((e)=>{
//       console.log('This failed',e);
//   });
//  database.ref().update({
//      name:'Aman',
//      age:25,
//      job:'Software Engineer',
//      'location/city':'Bangalore',  //location :{city:'banglore} won't work
//      isSingle:null
//  }).then(()=>{
//     console.log('DAta is updated');
// }).catch((e)=>{
//     console.log('Data is not updated',e);
// });;

//To update
//   database.ref('age').set(27);//to set age to 27
//   database.ref('location/city').set('Kanpur');
//   database.ref('attribute').set({//to add newattribute
//       height:73,
//       weight:55
//   }).then(()=>{
//     console.log('DAta is changed');
// }).catch((e)=>{
//     console.log('things didn\'t worked',e);
// });

//To remove database
// database.ref('isSingle').remove()
// .then(()=>{
//     console.log('Data is removed');
// }).catch((e)=>{
//     console.log('Data is not removed',e);
// });

// //Another way to remove
// database.ref('isSingle').set(null)
// .then(()=>{
//     console.log('Data is removed');
// }).catch((e)=>{
//     console.log('Data is not removed',e);
// });

//to fetch data
// database.ref().once('value')
// .then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//     console.log('Error fetching data',e);
// });
  //it updates when data is changed
//   database.ref().on('value',(snapshot)=>{
//       console.log(snapshot.val());
//   });
  // off func is used to deactivate above subscription

