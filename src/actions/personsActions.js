import persons from '../data/persons.json';

/**
 * Action for fetching persons from the backend.
 */
export function fetchPersons() {
    return function(dispatch) {
        dispatch({type: 'FETCH_PERSONS'});
        // NOTE: Mocking an HTTP request:
        setTimeout(() => {
            dispatch({type: 'FETCH_PERSONS_FULFILLED', payload: persons});
        }, 500);
    }
}

/**
 * Action for adding a person to the list.
 */
export function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        payload: person,
    }
}

/**
 * Action for removing a person from the list.
 */
export function removePerson(person) {
    return {
        type: 'REMOVE_PERSON',
        payload: person,
    }
}
