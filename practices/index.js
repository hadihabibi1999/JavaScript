class A {
    constructor(age){
      this.age=age;
    }
  
    call(name){
      console.log(`name: ${name} & age: ${this.age} !`);
    }
  }
  
  class B extends A {
      constructor(){
        super(19.5);
      }
  }
  
  const newB = new B();
  newB.call('Hadi');
  

  /*
   1) class B is child of class A 
   2) constructor is the 1st function whitch is called 
   3) 'new' key :{
       1)it makes an empty object
       2)calls constructor function 
       3)inputs all properties into it 
       4)returns all of them }
   4)in super we transfer props from child (B) to (A) , (A) gets it by constructor();    
  */