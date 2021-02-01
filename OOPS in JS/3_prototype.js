// All JavaScript objects inherit properties and methods from a prototype
// Hence we can use prototype to apply a propery or a method
// to all the objects of a constructor


// for example we modify the code in constructor.js
// to ensure that we don't have to create getSummary for each object

function Book(title,author,year) {
    this.title=title
    this.author=author
    this.year=year

}

// for that we add getSummary in the prototype of the object
// getsummary
Book.prototype.getsummary = function() {
    
    return `${this.title} was written by ${this.author} in ${this.year}`
    
}

// getage of the book
Book.prototype.getAge = function() {
    
    const years = new Date().getFullYear()-this.year
    return `${this.title} is ${years} old`
}

// Revise a book/change year
Book.prototype.revise = function(new_year) {
    
    this.year=new_year
    this.revised=true
}

// Instantiate an object
const book1=new Book('chem','John doe','2013')
const book2=new Book('phy','Jane Doe','2016')

// initial object
console.log(book1)

// get summary and age of the book
console.log(book1.getsummary())
console.log(book1.getAge())

// revise the book and print its age
book1.revise(2019)
console.log(book1.getAge())