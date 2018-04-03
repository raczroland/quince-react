/**
 * Reducer for the store.
 * The default state is an empty array.
 */
export default function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PERSON': // add a person to the list
            return [...state, action.payload];
        case 'REMOVE_PERSON': // remove a person from the list:
            return state.filter(person => JSON.stringify(person) !== JSON.stringify(action.payload)); // we check here if the two object are the same
        case 'FETCH_PERSONS_FULFILLED': // we have the data, load it:
                return [...action.payload];
        default:
            return state;
    }
}