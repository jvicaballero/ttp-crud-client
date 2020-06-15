import React from "react";

const EditStudentFormView = (props) => {
    return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        First Name: {" "}
                        <input
                            value={props.firstName}
                            name="firstName"
                            onChange={props.handleChange}
                            required
                            ></input>
                    </div>
                    <div>
                        Last Name: {" "}
                        <input
                            value={props.lastName}
                            name="lastName"
                            onChange={props.handleChange}
                            required
                            ></input>
                    </div>
    
                    <div>
                        email: {" "}
                        <input
                            value={props.email}
                            name="email"
                            onChange={props.handleChange}
                            required
                            ></input>
                    </div>
    
                    <div>
                        GPA: {" "}
                        <input
                            value={props.gpa}
                            name="gpa"
                            onChange={props.handleChange}
                            required
                            ></input>
                    </div>
    
                    <div>
                       ImageURL: {" "}
                        <input
                            value={props.imageUrl}
                            name="imageUrl"
                            onChange={props.handleChange}
                           
                            ></input>
                    </div>
                <button>Edit Student</button>
                </form>
            </div>
    );
  };

export default EditStudentFormView