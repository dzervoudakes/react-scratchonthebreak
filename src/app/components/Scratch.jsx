import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return (
            <div className="content-container">
                <p>You are here because you told someone that they lost a game of pool when they scratched on the break.</p>
                <p>Please answer the following questions to determine who lost.</p>
                <p className="sub-header">Did your opponent scratch on the break?</p>
                <div className="button-bar">
                    <Link to="/sob">
                        <RaisedButton primary label="Yes" />
                    </Link>
                    <Link to="/nsob">
                        <RaisedButton primary label="No" />
                    </Link>
                </div>
            </div>
        );
    }
}

// 'scratched on break', 'not scratched on break', 'eight on break', and 'not eight on break' views
export class Generic extends React.Component {
    componentDidMount() {
        const homeLink = document.getElementById('homeLink');
        homeLink.classList.add('active');
    }

    render() {
        const renderButtons = () => {
            if (this.props.showButtons) {
                return (
                    <div className="button-bar">
                        <Link to="/eob">
                            <RaisedButton primary label="Yes" />
                        </Link>
                        <Link to="/neob">
                            <RaisedButton primary label="No" />
                        </Link>
                    </div>
                );
            }
        };

        return (
            <div className="content-container">
                <p className="sub-header">{this.props.text}</p>
                {renderButtons()}
            </div>
        );
    }
}