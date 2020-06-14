import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteCampusThunk } from "../../thunks";
import {AllStudentsView} from "../views"

class AllStudentsContainer extends Component {
    componentDidMount(){
        console.log('in container, before fetch call')
        this.props.fetchAllStudents();
    }

    render()
    {
        console.log('in container, before views call')
        return(<AllStudentsView
             allStudents={this.props.allStudents}
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
    }
}

// AllStudentsContainer.propTypes = {
//     allStudents: PropTypes.array.isRequired,

//   };

export default connect(mapState , mapDispatch)(AllStudentsContainer);