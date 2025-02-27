// More detail About forEach loop.
// return values by forEach -> value return by callBack function is ignored by the forEach.
const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
})
console.log(values); // undefined

// Filter, Map and Reduce in JavaScript.

// Filter Operation in JavaScript.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4); // no retru keyword: explicit return.

console.log(newNums); //[5, 6, 7, 8, 9, 10];
//working of filter:filter take a callback function and it can access the each of the given array and  return new array of values that satify the given condition.

const newNums2 = myNums.filter( (num) => { // create a scope 
    return num > 4; // need to write return keyword without it return empty array.
 })
 console.log(newNums2);


//  doing same thing with array
let arr = [];
const newNum3 = myNums.forEach( (item) => {
    if (item > 4){
        arr.push(item);
    }
})
// 


// Book Example
// Book array: items are objects.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // return those books with genre of history
const userBooks = books.filter( (book) => book.genre === "History");
  // jo bhi book " book.genre === "History" " ko satify karega wo return ho jayega.
  
  
//   return those books publish after 2000.
const userBooks2 = books.filter( (book) => book.publish > 2000 )
// const userBooks2 = books.filter( (book) => {book.publish > 2000} )
// this will return empty array because we have use/open scope.
   
// return those books publish after 1995 and belongs to science genre
 const userBooks3 = books.filter( (book) => {
    return ( book.publish >= 1995 && book.genre === "History");
 })

console.log(userBooks3);