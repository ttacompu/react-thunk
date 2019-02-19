export const currentCharacter = (state = {}, action) => {
    switch (action.type) {
        case "CURRENT_CHARACTER":
            return { ...state,  ...action.payload }
        default: 
            return state;
    }
}