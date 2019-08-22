
const initialState = {
    activeCity: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CITY': {
            console.log(action.index);
            return {
                ...state,
                activeCity: action.index,
            }
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;