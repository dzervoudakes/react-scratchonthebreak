import React, { Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ButtonBar } from '@/components/common';

class Generic extends React.PureComponent {
    componentDidMount() {
        const homeLink = document.getElementById('homeLink');
        homeLink.classList.add('active');
    }

    render() {
        const renderButtons = () => {
            if (this.props.showButtons) return <ButtonBar yes="eob" no="neob" />;
        };
        return (
            <Fragment>
                <p className="sub-header">{this.props.text}</p>
                {renderButtons()}
            </Fragment>
        );
    }
}

export default Generic;