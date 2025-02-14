// Programming with Mosh: JavaScript This KeyWord
// this in javascript 
//this references to the object that is executing the current function
// method in an object then this refer to the object itself. method -> this
//for regular function: this -> global object (window or global); 
  //function -> global object (window or global);
  const video = {
    title: 'a',
    play(){
        console.log(this); //video object
    }
}

video.stop = function (){
    console.log(this); //refer to video object
}
//   video.stop();

//   for regular function
function playVideo(){
  console.log(this); //window or global object
}
// playVideo(); 

// For constructor function 
// we call the constructor function using the new operator
//constructor function name start with capital
function Video(title, name, type){
  this.title = title;
  this.name = name;
  this.type = type;
  console.log(this); // this -> Video Object;
}
// using constructor function to create a new object

const v = new Video('Game', 'Mario', 'Adventure');
// Note: new operator creates a new empty object {}
// this in constructor function point to this empty object
// Summary: if you call a function a using a new operator which is the case for constructor functions .."this" will reference a new empty object.

// another case
const film = {
  title: 'GreenBook',
  tags: ['a', 'b', 'c'],
  showTags() {
      //this -> current object
      this.tags.forEach(function(tag){
          console.log(tag);
          // console.log(this); // this -> global object
      })
  }
}
// film.showTags();
// Why "this" inside of a callback function of forEach refer to global object -> because we are inside of the  callback function ...this callback function is just a regular function ..it's not a method in a film object ..only method in a film object is showTags.Since it's a regular function "this" refer to a global object. so it's the global object that is executing this anonymous callback function.
// Solving the above problem
const secondFilm = {
  title: 'Spider Man',
  tags: ['tobey', 'andrew', 'tom'],
  showTags(){
      this.tags.forEach(function(tag){
          console.log(this.title, tag);
      //    console.log(this);//this -> object (secondFilm)
          
      }, this) //this -> secondFilm
  }
}
// callback function of forEach has second argument, it can take an object and refer to the same object using this argument.
secondFilm.showTags();
