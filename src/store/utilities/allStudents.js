import axios from 'axios';

//ACTION TYPES
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";


//ACTION CREATORS
const fetchAllStudents = (students) => {
    console.log(students);
    return{
    type: FETCH_ALL_STUDENTS,
    payload: students
    }
};

const addStudent = (student) => {
    return{
    type: ADD_STUDENT,
    payload: student,
}
}

const deleteStudent = (id) => {
    return{
        type: DELETE_STUDENT,
        payload: id,
    }
}

const editStudent = (student) => {
    return {
        type: EDIT_STUDENT,
        payload:student
    }
}

//THUNK CREATORS
export const fetchAllStudentsThunk = () => (dispatch) => {
    return axios
    .get('/api/students')
    .then((response) => response.data )
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((error) => console.log(error))
    
}

export const addStudentThunk = (student, ownProps) => (dispatch) => {
    return axios
    .post("/api/students", student)
    .then((res) => res.data)
    .then((newStudent) => {
        dispatch(addStudent(newStudent));
        ownProps.history.push(`/students/${newStudent.id}`);
    })
    .catch((error) => console.log(error));

}

export const deleteStudentThunk = (id) => (dispatch) => {
    return axios
    .delete(`/api/campuses/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteStudent(id)))
    .catch((error) => console.log(error))
}

export const editStudentThunk = (id , student, ownProps) => (dispatch) => {
    return axios
    .put(`/api/students/${id}` , student)
    .then((res) => res.data)
    .then((updatedStudent) => {
        dispatch(editStudent(updatedStudent));
        ownProps.history.push(`/students/${updatedStudent.id}`);
    })
    .catch((error) => console.log(error))
}

//REDUCERS
const reducer = (state = [], action) => {
    switch(action.type){
    case FETCH_ALL_STUDENTS:
        return action.payload;
    case ADD_STUDENT:
        return [...state, action.payload];
    case DELETE_STUDENT:
        return state.filter((student) => student.id !== action.payload);
    case EDIT_STUDENT:
        return [...state, action.payload];
    default:
        return state;
    }
}

export default reducer;