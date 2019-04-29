// clients[], projects[], expenses[], userAuth{}

const redux = require('redux')
const { createStore, combineReducers } = redux

//reducers
const clientsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_CLIENT':
            return [...state, action.payload]
        case 'REMOVE_CLIENT':
            return state.filter(client => client.id != action.payload)
        case 'EDIT_CLIENT':
            return state.map(client => {
                if(client.id == action.payload.id){
                    return {...client, ...action.payload.client}
                    //return Object.assign({}, client, action.payload.client)
                }else{
                    return {...client}
                }
            })
        default:
            return [...state]
    }
}

const projectsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state, action.payload]
        case 'REMOVE_PROJECT':
            return state.filter(project => project.id != action.payload)
        case 'EDIT_PROJECT':
            return state.map(project => {
                if(project.id == action.payload.id){
                    return {...project, ...action.payload.project}
                }else{
                    return {...project}
                }
            })
        default:
            return [...state]
    }
}

//create store
const store = createStore(combineReducers({
    clients: clientsReducer,
    projects: projectsReducer
}))

//render after state change
store.subscribe(() => {
    console.log(store.getState())
})

//action generators
const addClient = (client) => {
    return {
        type: 'ADD_CLIENT',
        payload: client
    }
}
const editClient = (id, client) => {
    return {
        type: 'EDIT_CLIENT',
        payload: {
            id, client
        }
    }
}
const removeClient = (id) => {
    return {
        type: 'REMOVE_CLIENT',
        payload: id
    }
}
const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        payload: project
    }
}
const editProject = (id, project) => {
    return {
        type: 'EDIT_PROJECT',
        payload: {
            id, project
        }
    }
}
const removeProject = (id, project) => {
    return {
        type: 'REMOVE_PROJECT',
        payload: id
    }
}

//dispatch
store.dispatch(addClient({id: 1, name: 'Banty', email: 'banty@gmail.com'}))
store.dispatch(addClient({id: 2, name: 'Sunil', email: 'sunil@gmail.com'}))
store.dispatch(addClient({id: 3, name: 'Arijit', email: 'arijit@gmail.com'}))
store.dispatch(editClient(2, {name: 'Arijit'}))
store.dispatch(removeClient(2))

store.dispatch(addProject({id: 1, name: 'React JS'}))
store.dispatch(addProject({id: 2, name: 'Node JS'}))
store.dispatch(addProject({id: 3, name: 'Mongo DB'}))
store.dispatch(editProject(2, {name: 'Express'}))
store.dispatch(removeProject(2))

//getstate
console.log('All Clients -')
store.getState().clients.forEach(client => console.log(client.name))
console.log('Single Client -')
const singleClient = store.getState().clients.find(client => client.id === 1)
console.log(singleClient.name)

console.log('All Projects -')
store.getState().projects.forEach(project => console.log(project.name))
console.log('Single Project -')
const singleProject = store.getState().projects.find(project => project.id === 1)
console.log(singleProject.name)