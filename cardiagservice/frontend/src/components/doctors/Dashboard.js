import React, {Fragment} from 'react'
import Form from './Form'; 
import Doctors from './Doctors'

export default function Dashboard() {
    return (
        <Fragment>
            <Form/>
            <Doctors/>
        </Fragment>
    )
}
