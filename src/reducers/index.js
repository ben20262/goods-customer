export default function rootReducer (state = {items: [], categories: [], loading: false}, action) {
    switch (action.type) {
        case 'LOADING ITEMS':
            return {
                ...state,
                loading: true
            }
        case 'ADD_ITEMS':
            return {
                items: action.items,
                categories: action.categories,
                loading: false
            }
        default:
            return state
    }
}