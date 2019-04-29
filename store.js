const configureStore = () => {
    const state = {
        count: 0,
        //get state value - getstate
        getState: function(){
            return this.count
        },
        //update state values - dispatch
        dispatch: function(action){ //reducer
            switch(action.type){
                case 'INCREMENT':
                    this.count++
                    break
                case 'DECREMENT':
                    this.count--
                    break
                case 'RESET':
                    this.count = 0
                    break
                case 'INCREMENT_BY':
                    this.count = this.count + action.payload
                    break
                case 'DECREMENT_BY':
                    this.count = this.count - action.payload
                    break
                case 'SET_TO':
                    this.count = action.payload
                    break
            }
        }
    }
    return state
}

const store = configureStore()

//action generator - function that returns action
const increment = () => {
    return { type: 'INCREMENT' } //action
}
const decrement = () => {
    return { type: 'DECREMENT' }
}
const reset = () => {
    return { type: 'RESET' }
}
const incrementBy = (value) => {
    return { type: 'INCREMENT_BY', payload: value }
}
const decrementBy = (value) => {
    return { type: 'DECREMENT_BY', payload: value }
}
const setTo = (value) => {
    return { type: 'SET_TO', payload: value }
}

console.log('start',store.getState())

store.dispatch(increment())
store.dispatch(increment())
console.log('increment',store.getState())

store.dispatch(decrement())
console.log('decrement',store.getState())

store.dispatch(reset())
console.log('reset',store.getState())

store.dispatch(incrementBy(10))
console.log('incrementBy',store.getState())

store.dispatch(decrementBy(10))
console.log('decrementBy',store.getState())

store.dispatch(setTo(15))
console.log('setTo',store.getState())