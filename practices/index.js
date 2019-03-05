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


/* let user = {
  name: "John",
  hi() {
     console.log(this.name)
      }
}

 let ss = user.hi;
 ss();

 */
let user = { name: "John" };

let admin = { name: "Admin",
  sayHi() {
    console.log( this.name );
} };


user.cc = admin.sayHi();//admin
user.cc;

user.cc = admin.sayHi;//john
user.cc();


