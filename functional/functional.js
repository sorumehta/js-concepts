// Not to be confused with functional programming
// No need of this keyword. Just take the state as function parameter.

const newUser = (state) => ({
    scoreIncrement: () => {
        console.log(`increasing score to ${state.score} + 1`)
        state.score++;
    },
    getScore: () => {
        return state.score;
    }
})

const user1 = newUser({name: 'Saurabh', score: 9})
user1.scoreIncrement();
console.log(user1.getScore())