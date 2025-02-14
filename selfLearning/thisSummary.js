// "this" in javascript
//this -> keyword
//this -> refers to an object
//which object -> depends on where and how "this" is called.
// case -> calling this normally 
console.log(this);  //empty object
//global object or window object
//case -> inside of a regular function 
function regularFunction(){
    console.log(this); //global object or window object
}
// regularFunction(); //global object

//case -> inside an object method
let person = {
    name: 'michael',
    profession: 'singer',
    perform: function(){
        console.log(this); //person object
    }
}
person.perform();

//case -> constructor function 
function Video(title){
    console.log(this); //empty video object
    this.title = title;
    console.log(this); //refer to Video Object
}
let video = new Video('cat vidoes');
