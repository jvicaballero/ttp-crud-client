import React from 'react';

const StudentView = (props) => {
    let display;
    console.log("props passed in student views" , props)
    console.log("props.student.campus=" , props.student.campus)
    if(props.student.campus) {
        display = (
            <div>
                <p>
                    {props.student.campus.length} Campus: {props.student.campus.name}
                </p>

                {/* {props.student.campus.map((campus) => (
                    <div key={campus.id}>{campus.name}</div>
                ))} */}

                <p></p>
                <p></p>

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
            
            {display}
        </div>
    )
}

export default StudentView;