import React from 'react';
import { connect } from 'react-redux';
import './styles/History.css';

export class History extends React.Component {

    componentDidMount() {
        console.log(this.props.history);
    };

    render() {
        const listHistory = this.props.history.map((elem, index) =>
                <li key={index}>Item: {elem.item}, Connection: {elem.connection}, Result: {elem.result.toString()}</li>
        );
        return (
            <div className={`history-component ${this.props.theme}`}>
                {this.props.history.length ? <h1>Search history:</h1> : <h1>History is clear</h1>}
                <ul>{listHistory}</ul>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
        history: state.history
    }
};

export default connect(mapStateToProps)(History);
