// console.log("hello world!");

// let promise = new Promise(function(resolve, reject) {
//     resolve("done");
  
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
//   });

// promise.then(
//     resulter => console.log(resulter),
//     error => console.log(error)
// )

function getLastNames(firstName, people) {
    /*
    Inputs:
    A string representing a first name, firstName.
    An Array of person objects with properties, "firstName" and “lastName”
    Function to return a promise 
    which is resolved with a sorted array of "last name"
    property value of objects whose "first name " property matches the given first name
    rejected with a message "invalid" 
    if none of the person objects“firstName” property
    matches the input first name,firstName`
    */
    
    let promise1=new Promise((resolve, reject) => {

        // make an answer array to store last names of matching first_names
        let answer = [];
    
        // traverse people array and store last names for matching firstnames
        for (let i=0; i<people.length; i++) {
            if (people[i].firstName===firstName) {
                answer.push(people[i].lastName);
            }
        }
        
        // reject with message invalid if length is zero
        if (answer.length<1)reject(new Error("Invalid"))
        else {
            // sort the array first
            answer.sort(function (a, b) {
                return a.localeCompare(b); //using String.prototype.localCompare()
            });
            resolve(answer);
        }
    })

    return promise1;
}

// call funciton getLastNames
const people=[
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'John',
        lastName: 'chunkylover',
    },
    {
        firstName: 'Sharliot',
        lastName: 'Doe'
    }

];
firstName="John";
const promisetokeep=getLastNames(firstName,people);
promisetokeep.then(
    result=>console.log(result),
)
.catch(
    error=>{
        console.log("catch gets executed");
        console.log(error)
    }
)

// Use await, delete everything else
async function getCommentsByUserId(userId) {
    let raw_results = await fetch('/api/comments');
    let results = await raw_results.json();
    return results.filter(x => x.userId==userId).map(x => x.data);
}
module.exports = getCommentsByUserId;

