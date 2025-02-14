// When we say that the value of "this" depends on how a function is called rather than where it's defined, we mean that this takes its context based on the invocation rather than its location in the code.

const obj = {
    prop: 42,
    method: function() {
      console.log(this.prop); // `this` refers to `obj`
    }
  };
  // Here we called function (method) as a method of an object
  obj.method(); // Logs: 42
  
  //Assigned Method to a variable.
  // Here we store method object in a variable and then call it.
  // . When extractedMethod is called, it no longer has a reference to obj, so this will refer to the global object (or be undefined in strict mode).
  const extractedMethod = obj.method;
  extractedMethod(); // `this` does not refer to `obj` anymore
  
  // The key takeaway is that the value of this is determined at the time of function invocation (how the function is called) rather than when or where the function is defined. This is why understanding the different ways a function can be called is crucial in managing the context of this.
  