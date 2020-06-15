import React, {Component} from "react"
//import React, {editCampusThunk} from "../../thunks";
import {EditStudentFormView} from "../views"
import {connect} from "react-redux"
import {fetchStudentThunk, editStudentThunk} from "../../thunks"


class EditStudentFormContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            firstName: "",
            lastName: "",
            email: "",
            gpa: "",
            imageUrl: "",
        }


    }

    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id).then(({payload}) => {
            this.setState(payload);
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
       const id = this.props.match.params.id;
       this.props.editStudent(id,this.state)
    };

    render() 
    {
        return(
            <EditStudentFormView
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            gpa={this.state.gpa}
            imageUrl={this.state.imageUrl}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
                />
        )
    }
}

const mapState = (state) => {
    return { campus: state.campus };
  };
  
  const mapDispatch = (dispatch, ownProps) => {
    return {
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      editStudent: (id, student) => dispatch(editStudentThunk(id, student,ownProps)),
    };
  };

export default connect(mapState , mapDispatch)(EditStudentFormContainer)