import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Modal from 'react-modal';
import { connect } from "react-redux"

import PersonForm from './PersonForm';
import { fetchPersons, removePerson, addPerson } from '../actions/personsActions';

Modal.setAppElement('#root');

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px'
    }
  };

export class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
    }

    componentWillMount() {
        this.props.dispatch(fetchPersons());
    }

    /**
     * Open the form modal
     */
    openModal() {
        this.setState({modalIsOpen: true});
    }

    /**
     * Close the form modal.
     */
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    /**
     * Remove the given person from the list.
     */
    removePerson(person) {
        this.props.dispatch(removePerson(person));
    }

    /**
     * Add the given person to the list.
     */
    addPerson(person) {
        this.props.dispatch(addPerson(person));
    }

    /**
     * Render method.
     */
    render() {
        return (<div className="container mt-3">
            <div className="my-3">
                <button className="btn btn-primary" onClick={this.openModal.bind(this)}>Add</button>
            </div>
            <ReactTable
                data={this.props.persons}
                columns={[
                    { Header: <span>Name<br />(job title)</span>, accessor: 'name', Cell: row => <span>{row.original.name}<br />{row.original.job}</span> },
                    { Header: 'Age', accessor: 'age' },
                    { Header: 'Nickname', accessor: 'nick' },
                    { Header: 'Employee', accessor: 'employee',
                        Cell: row => (row.value ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>) },
                    { Header: '', Cell: row => <button className="btn btn-danger" onClick={this.removePerson.bind(this, row.original)}>Delete</button> },
                ]}
                defaultPageSize={10}
            />
            <div className="my-3">
                <h3>Data dump</h3>
                <textarea className="json-code w-100" readOnly value={JSON.stringify(this.props.persons, null, 2)}></textarea>
            </div>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal.bind(this)}
                style={customStyles}
            >
                <PersonForm onSubmit={this.addPerson.bind(this)} onCancel={this.closeModal.bind(this)} />
            </Modal>
        </div>);
    }

}

const stateMap = (state) => {
    return {
        persons: state,
    };
};

//NOTE @connect() is not working with ES6 directly
export default connect(stateMap)(Layout);