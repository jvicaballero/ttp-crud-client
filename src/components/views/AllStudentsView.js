import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    console.log("in all students view")
    if (!props.allStudents.length) {
        return <div className="all-students">There are no students</div>;
      }

    return (
    <div className='all-campuses'>
        <Link to="/student/new">
      <button>Add Student</button>
      </Link>
        {props.allStudents.map((student) => (
            <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                <h1>{student.firstName} {student.lastName}</h1>
                </Link>
                <img src={student.imageUrl} width="200px" alt={student.firstName +' ' + student.lastName}/>

                <div>
                <button onClick={() => props.handleDeleteStudent(student.id)}>Delete Student</button>
                <button onClick={() => props.handleEditStudent(student)}>Edit Student</button>
            </div>
           
            </div>
        )
    )}

    </div>
    );


};

AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
  };
  

export default AllStudentsView;