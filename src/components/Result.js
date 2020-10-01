import React from 'react';
import { connect } from 'react-redux';
import { appendToHistory } from '../actions/actions';
import './styles/Result.css';
import { ajaxSearch } from '../logic/tpbConnection'; 

export class Result extends React.Component {

    componentDidMount() {
        ajaxSearch("cokolwiek");
        this.props.appendToHistory(this.props.input, this.props.connection, true);    
    };

    render() {
        return (
            <div>
                <h1>Input: {this.props.input}</h1>
                <h1>Connection: {this.props.connection}</h1>
                <h1>Result: true</h1>
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    input: state.input,
    connection: state.connection
});

const mapDispatchToProps = (dispatch) => ({
    appendToHistory: (item, connection, result) => dispatch(appendToHistory(item, connection, result))
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
