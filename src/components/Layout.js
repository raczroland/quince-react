import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Modal from 'react-modal';

import PersonForm from './PersonForm';

import { connect } from "react-redux"
import { fetchPersons, removePerson, addPerson } from '../actions/personsActions';

Modal.setAppElement('#root');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '600px'
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

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

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

    removePerson(person) {
        this.props.dispatch(removePerson(person));
    }

    addPerson(person) {
        this.props.dispatch(addPerson(person));
    }

}

const stateMap = (state) => {
    return {
        persons: state,
    };
};

//?
export default connect(stateMap)(Layout);