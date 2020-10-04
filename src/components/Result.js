import React from 'react';
import { connect } from 'react-redux';
import { appendToHistory, checkResult, updateResult } from '../actions/actions';
import './styles/Result.css';
import { ajaxSearch, imdbSearch } from '../logic/tpbConnection'; 

export class Result extends React.Component {

    async componentDidMount() {
        let response = null;
        if (this.props.input === '') return;
        switch(this.props.connection) {
            case "ajax":
                response = await ajaxSearch(this.props.input);
                this.props.updateResult(response);
                this.props.appendToHistory(this.props.input, this.props.connection, this.props.result
);
                this.props.checkResult(true);
                break;
            case "imdb":
                try {
                    let imdbId = await imdbSearch(this.props.input);
                    response = await ajaxSearch(imdbId);
                    this.props.updateResult(response);
                } catch(error) {
                    if (error === "Movie not found") this.props.updateResult(false);
                    else console.log(error);
                } finally {
                    this.props.appendToHistory(this.props.input, this.props.connection, this.props.result);
                    this.props.checkResult(true);
                }
                break;
            case "node":
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div className={`result-component ${this.props.theme}`}>
                <ul>
                    <li><b>Input:</b> {this.props.input}</li>
                    <li><b>Connection:</b> {this.props.connection}</li>
                    <li><b>Result:</b> {!this.props.input ? "Error - provide a movie title" : this.props.gotResult ? this.props.result.toString() : "Connecting..."}</li>
                </ul>
                {!this.props.input ? <i className="fas fa-times"></i> : this.props.gotResult ? <i className="fas fa-check"></i> : <i className="fas fa-spinner fa-spin"></i>}
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    input: state.input,
    connection: state.connection,
    theme: state.theme,
    gotResult: state.gotResult,
    result: state.result
});

const mapDispatchToProps = (dispatch) => ({
    appendToHistory: (item, connection, result) => dispatch(appendToHistory(item, connection, result)),
    checkResult: (result) => dispatch(checkResult(result)),
    updateResult: (result) => dispatch(updateResult(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
