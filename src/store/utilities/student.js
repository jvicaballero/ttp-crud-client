import axios from "axios";

//ACTION TYPE
const FETCH_STUDENT = "FETCH_STUDENT";

//ACTION CREATOR
const fetchStudent = (student) => {
    return{
        type: FETCH_STUDENT,
        payload: student,
    }
}

//THUNK CREATOR
export const fetchStudentThunk = (id) => (dispatch) => {
    return axios
    .get(`/api/students/${id}`)
    .then((res) => res.data)
    .then((student) => dispatch(fetchStudent(student)))
    .catch((error) => console.log(error));
}

//REDUCER
const reducer = (state ={} ,action) => {
    switch (action.type) {
        case FETCH_STUDENT:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;