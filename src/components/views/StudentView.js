import React from 'react';
import { Link } from "react-router-dom";

const StudentView = (props) => {
    let display;
    console.log("props passed in student views" , props)
    console.log("props.student.campus=" , props.student.campus)
    if(props.student.campus) {
        display = (
            <div>
                <p>
                    Campus: {props.student.campus.name}
                </p>
            </div>
        )
    }
    else {
        display = <p>Student is not enrolled in any college</p>
    }

    return (
        <div>
            <h1>{props.student.firstName} {props.student.lastName}</h1>
            <h2>GPA: {props.student.gpa}</h2>
            <h3>{props.student.email}</h3>
            <img src={props.student.imageUrl} alt={props.student.firstName} width="200px" />
            
            <div>
            <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit Student
      </Link>
      </div>
            {display}
        </div>
    )
}

export default StudentView;