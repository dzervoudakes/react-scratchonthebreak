import React from 'react';
import { Link } from 'react-router-dom';

export class Scratch extends React.Component {
    render() {
        return (
            <div className="content-container">
                <p>You are here because you told someone that they lost a game of pool when they scratched on the break.</p>
                <p>Please answer the following questions to determine who lost.</p>
                <p><Link to="/sob/">Yes</Link></p>
                <p><Link to="/nsob/">No</Link></p>
            </div>
        );
    }
}

// export class Sob extends React.Component {
//     render() {
//         return (
//             <div className="content-container"></div>
//         );
//     }
// }

// export class Nsob extends React.Component {
//     render() {
//         return (
//             <div className="content-container"></div>
//         );
//     }
// }

// export class Eob extends React.Component {
//     render() {
//         return (
//             <div className="content-container"></div>
//         );
//     }
// }

// export class Neob extends React.Component {
//     render() {
//         return (
//             <div className="content-container"></div>
//         );
//     }
// }