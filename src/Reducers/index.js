const PLACEHOLDER = "PLACEHOLDER"


export const initialState = {

}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case PLACEHOLDER:
            return {

            }
        default:
            return state
    }
}