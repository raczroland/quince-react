import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { connect } from "react-redux"
import { fetchPersons } from '../actions/personsActions';

@connect((store) => {
    return store;
})
export default class Layout extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchPersons());
    }

    render() {
        return <div className="container mt-3">
            <div className="my-3">
                <button className="btn btn-primary">Add</button>
            </div>
            <ReactTable
                data={[]}
                columns={[]}
            />
        </div>;
    }

}