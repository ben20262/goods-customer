const apiURL = "http://localhost:3001"

export const fetchItems = () => {
    return dispatch => {
        dispatch({type: 'LOADING_ITEMS'})
        fetch(`${apiURL}`)
        .then(resp => resp.json())
        .then(items => dispatch({ type: 'ADD_ITEMS', items }))
    }
}