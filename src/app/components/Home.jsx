import React, { Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ButtonBar } from './modules';

export class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <p>You are here because you told someone that they lost a game of pool when they scratched on the break.</p>
                <p>Please answer the following questions to determine who lost.</p>
                <p className="sub-header">Did your opponent scratch on the break?</p>
				<ButtonBar yes="sob" no="nsob" />
            </Fragment>
        );
    }
}