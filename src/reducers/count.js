import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0};

export default (state = initialState, action) => {
    siwtch(action.type){
        case INCREMENT:
            return { value: state.value + 1};
            break;
        case DECREMENT:
            return { value: state.value - 1};
    }

}