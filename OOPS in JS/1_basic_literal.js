// In java script almost everythins is an arguement
// there are also primitive which are not object

// like string

// primitive
const s1='Hello'
console.log(typeof s1)

// object
const s2 = new String('Hello')
console.log(typeof s2)

// DOM object
// console.log(window)
// window.alert(1)

// anything inside window can be acessed directly
// alert(2)

//object literals
const book1 = {
    title: 'Book one',
    author: 'John Doe',
    year: '2013',
    getsummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book1.title)
console.log(book1.getsummary());

// we can get keys and values of an object
console.log(Object.values(book1))
console.log(Object.keys(book1))

// or logging out whole object
console.log(book1)