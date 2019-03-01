//let promise = new Promise(resolve=>resolve('hi world ...'));
//promise.then(alert);

/*
let promise = new Promise(function(resolve){
setTimeout(()=>resolve('hi'),2000)
})
promise.then(alert);
*/

let promise = new Promise(resolve => {
  setTimeout(() => fresolve("hi world ..."), 1000)
});
promise.then(alert); 