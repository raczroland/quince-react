import React from 'react';

export default class PersonForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: '',
            age: '',
            nick: '',
            employee: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  
    handleSubmit(event) {
        this.props.onSubmit(this.state);
        this.props.onCancel();
        event.preventDefault();
    }
  
    /**
     * Render method.
     */
    render() {
        const isSubmitEnabled = this.state.name.length > 0;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input name="name" id="inputName" type="text" className="form-control" placeholder="Some text" value={this.state.name} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor ="inputJob" className="col-sm-2 col-form-label">Job title</label>
                    <div className="col-sm-10">
                        <input name="job" id="inputJob" type="text" className="form-control" placeholder="Some text" value={this.state.job} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input name="age" id="inputAge" type="text" className="form-control" placeholder="Some text" value={this.state.age} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputNick" className="col-sm-2 col-form-label">Nickname</label>
                    <div className="col-sm-10">
                        <input name="nick" id="inputNick" type="text" className="form-control" placeholder="Some text" value={this.state.nick} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmployee" className="col-sm-2 col-form-label">Employee</label>
                    <div className="col-sm-10">
                        <input name="employee" id="inputEmployee" className="form-check-input ml-0 mt-2" type="checkbox" value={this.state.employee} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary mx-2" disabled={!isSubmitEnabled}>Add</button>
                        <button className="btn btn-secondary mx-2" onClick={this.props.onCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        );
    }

}