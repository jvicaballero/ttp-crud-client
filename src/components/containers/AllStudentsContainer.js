import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk, editStudentThunk} from "../../thunks";
import {AllStudentsView} from "../views"

class AllStudentsContainer extends Component {
    componentDidMount(){
        console.log('in container, before fetch call')
        this.props.fetchAllStudents();
    }

    handleDeleteStudent = (id) => {
        this.props.deleteStudent(id);
    }

    handleEditStudent = (student) => {
        this.props.editStudent(student);
    }

    render()
    {
        console.log('in container, before views call')
        return(<AllStudentsView
             allStudents={this.props.allStudents}
             handleDeleteStudent={this.handleDeleteStudent}
             handleEditStudent={this.handleEditStudent}
             />);
        
    }

}

const mapState = (state) => {
    return {
        allStudents: state.allStudents,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    }
}

// AllStudentsContainer.propTypes = {
//     allStudents: PropTypes.array.isRequired,

//   };

export default connect(mapState , mapDispatch)(AllStudentsContainer);