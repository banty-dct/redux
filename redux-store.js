// Common JS module - system
// npm install --save redux
const redux = require('redux')
const { createStore } = redux

const store = createStore((state = { count: 0 }, action) =>{
    //we are always supposed to return a new object
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'INCREMENT_BY':
            return {
                count: state.count + action.payload
            }
        default:
            return {
                count: state.count
            }
    }
})

store.subscribe(() => {
    console.log('state updated', store.getState())
})

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
const incrementBy = (num) => {
    return {
        type: 'INCREMENT_BY',
        payload: num
    }
}
const reset = () => {
    return {
        type: 'RESET'
    }
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incrementBy(10))
store.dispatch(reset())