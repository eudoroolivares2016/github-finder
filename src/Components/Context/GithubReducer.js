const githubReducer = (state, action) => {
    // current state and then the action to take on that state 
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, 
                users: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default githubReducer

