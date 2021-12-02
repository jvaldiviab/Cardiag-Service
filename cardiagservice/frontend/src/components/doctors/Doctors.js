import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDoctors, deleteDoctor } from '../../actions/doctors';

export class Doctors extends Component {

    static propTypes = {
        doctors: PropTypes.array.isRequired,
        getDoctors: PropTypes.func.isRequired,
        deleteDoctor: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getDoctors();
    }

    render() {
        return (
            <Fragment>
                <h2>Doctors</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.doctors.map(doctor => (
                            <tr key={doctor.id}>
                                <td>{doctor.id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.message}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteDoctor.bind(this, doctor.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {" "}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors.doctors
});

export default connect(
    mapStateToProps,
    { getDoctors, deleteDoctor }
)(Doctors);