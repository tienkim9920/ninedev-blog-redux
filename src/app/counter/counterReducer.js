import counterType from "./counterType";

const initialData = {
    value: 0,
};

const counterReducer = (state = initialData, actions) => {
    switch(actions.type) {
        case counterType.INCREMENT:
            return {
                value: state.value++
            }

        default: return state
    }

}

export default counterReducer;