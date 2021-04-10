const proto = {
    increment(){
        this.score++
    }
}

const createUser = (name, score) => Object.assign({}, proto, {name, score})

const user1 = createUser('Saurabh', 9)
user1.increment()
console.log(user1)
