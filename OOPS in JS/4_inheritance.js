// inheritance

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

// Magazine constructor
function Magazine(title,author,year,month) {
    Book.call(this,title,author,year)
    this.month=month;
}

// Inherit prototype
Magazine.prototype =Object.create(Book.prototype)

// Instantiate Magazine object
const mag1 = new Magazine('Mag one','John Doe','2018','Jan')

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1)