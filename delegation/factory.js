//when its not a constructor function that's returning objects, 
// its a factory function.

const proto = {
    increment(){
        this.score++
    }
}

const createUser = (name, score) =>  Object.assign(Object.create(proto), {name, score})

const user1 = createUser('Saurabh', 9)
user1.increment()
console.log(user1)

// Drawback here is that you can store functionality in progto but you cannot
// maintain state in proto because each user instance refers to the 
// same proto instance