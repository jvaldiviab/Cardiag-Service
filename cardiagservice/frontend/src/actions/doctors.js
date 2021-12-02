import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from './auth';

import { GET_DOCTORS, DELETE_DOCTOR, ADD_DOCTOR } from "./types";

// GET_DOCTORS
export const getDoctors = () => (dispatch, getState) => {
    axios
        .get("/api/doctors/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_DOCTORS,
                payload: res.data
            })
        })
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)));
};

// DELETE DOCTORS
export const deleteDoctor = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/doctors/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteDoctor: "Doctor Deleted" }));
            dispatch({
                type: DELETE_DOCTOR,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD DOCTOR
export const addDoctor = doctor => (dispatch, getState) => {
    axios
        .post(`/api/doctors/`, doctor, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addDoctor: "Doctor Added" }));
            dispatch({
                type: ADD_DOCTOR,
                payload: res.data
            })
        })
        .catch(err => dispatch(
            returnErrors(err.response.data, err.response.status)));
};
