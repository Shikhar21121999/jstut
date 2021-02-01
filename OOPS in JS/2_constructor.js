// Constructor (Es-5)

function Book(title,author,year) {
    this.title=title
    this.author=author
    this.year=year

    this.getsummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// Instantiate an object
const book1=new Book('chem','John doe','2013')
const book2=new Book('phy','Jane Doe','2016')

// objects
console.log(book1)
console.log(book2)

// calling functions on object
console.log(book1.getsummary())
console.log(book2.getsummary())
