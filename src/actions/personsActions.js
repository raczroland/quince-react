import persons from '../data/persons.json';

export function fetchPersons() {
    return function(dispatch) {
        dispatch({type: 'FETCH_PERSONS'});
        // Mocking an HTTP request:
        setTimeout(() => {
            dispatch({type: 'FETCH_PERSONS_FULFILLED', payload: persons});
        }, 500);
    }
}

export function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        payload: person,
    }
}

export function removePerson(person) {
    return {
        type: 'REMOVE_PERSON',
        payload: person,
    }
}
