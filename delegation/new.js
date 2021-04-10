function createUser(name, score){
    this.name = name //this is a new object created by 'new' keyword
    this.score = score // its returned implicitly because of the new keyword
}
//When function are defined, they also have an object with prototype property (set to {}) associated with them

createUser.prototype.increment = function(){this.score++} //beware: Don't use arrow function here!
// new keyword will assign the user1's __proto__ property to createUser's object part's prototype object
user1 = new createUser('Saurabh', 9) 
user1.increment()
console.log(user1)