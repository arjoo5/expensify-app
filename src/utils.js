 console.log('utils.jjs is running');
 /*Note there can be only one default export in file and the name used to import in app.js can be different from the one used in export statement */

export const square=(x)=> x*x ;     //named export
export const add=(a,b)=> a+b;      //named export
  const subtract=(a,b)=> a-b;   //default export
  export default subtract;

  /* jst do that 
    export default (a,b)=> a-b; */
//export {square,add,subtract as default };

