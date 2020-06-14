import React, {Component} from "react";
import {connect} from "react-redux";
import { AddStudentFormView } from "../views";
import {addStudentThunk} from "../../thunks"

class AddStudentFormContainer extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gpa: "",
            imageUrl: "",
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]:e.target.value,
    })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addStudent(this.state);
    }

    render()
    {
        return(<AddStudentFormView 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            gpa={this.state.gpa}
            imageUrl={this.state.imageUrl}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
        />)
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return{
        addStudent: (student) => dispatch(addStudentThunk(student, ownProps))
    }
}

export default connect(null, mapDispatch)(AddStudentFormContainer);