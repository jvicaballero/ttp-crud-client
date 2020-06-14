import axios from 'axios';

//ACTION TYPES
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";


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

//REDUCERS
const reducer = (state = [], action) => {
    switch(action.type){
    case FETCH_ALL_STUDENTS:
        return action.payload;
    case ADD_STUDENT:
        return [...state, action.payload];
    default:
        return state;
    }
}

export default reducer;