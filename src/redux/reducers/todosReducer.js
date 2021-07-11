export const todosReducer = (state = {todos: [], isLoading: true}, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {...state, todos: action.payload}
        case "ADD_TODOS":
            return {...state, todos: [...state.todos, action.payload]}
        case "SET_LOADING":
            return {...state,isLoading:action.payload }
        default:
            return {...state}
    }
}