export const counterReducer = (state = {counter: 0}, action) => {
    switch (action.payload) {
        case "INC":
            return {...state, counter: state.counter + 1}
        case "DEC":
            return {...state, counter: state.counter - 1}
        default:
            return {...state}
    }
}