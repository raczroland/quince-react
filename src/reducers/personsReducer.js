export default function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PERSON':
            return [...state, action.payload];
        case 'REMOVE_PERSON':
            return state.filter(person => JSON.stringify(person) !== JSON.stringify(action.payload));
        default:
            return state;
    }
}