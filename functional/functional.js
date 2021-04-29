
const newUser = (state) => ({
    scoreIncrement: () => {
        console.log(`increasing score to ${state.score} + 1`)
        state.score++;
    },
    getScore: () => {
        return state.score;
    }
})

// This is just like cloning, but with closure to hide our properties.
const user1 = newUser({name: 'Saurabh', score: 9})
user1.scoreIncrement();
console.log(user1.getScore())
