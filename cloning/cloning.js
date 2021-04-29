//This is different from delegation in the sense that we are copying properties instead of referring to the same one

const proto = {
    increment(){
        this.score++
    }
}

const createUser = (name, score) => Object.assign({}, proto, {name, score})

const user1 = createUser('Saurabh', 9)
user1.increment()
console.log(user1)
user1.score++
console.log(user1)

//Drawback here is that you can access the object properties direclty without even calling the proper methods.
