import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setAjaxRequest, setImdbRequest, setNodeRequest, updateInput } from '../actions/actions.js';

export class App extends React.Component {
    handleInputChange(event) {
        this.props.updateInput(event.target.value)
    };

    render() {
      return (
        <div className="App">
          <form>
            <label htmlFor="input">Movie title:</label>
            <input id="input" type="text" name="movietitle" value={this.props.input} onChange={this.handleInputChange.bind(this)} required></input>
          <div className="radios">
                <label id="connectionTitle">Connection type:</label>
                <div className="item">
                    <label htmlFor="ajax" className="radioLabel">AJAX</label>
                    <input type="radio" id="ajax" name="connectionType" value="ajax" onChange={this.props.setAjaxRequest} checked={this.props.connection === 'ajax'}></input>
                </div>
                <div className="item">
                    <label htmlFor="imdb" className="radioLabel">AJAX + IMDB ID</label>
                    <input type="radio" id="imdb" name="connectionType" value="imdb" onChange={this.props.setImdbRequest} checked={this.props.connection === 'imdb'}></input>
                </div>
                <div className="item">
                    <label htmlFor="node" className="radioLabel">NODE.js + IMDB ID</label>
                    <input type="radio" id="node" name="connectionType" value="node" onChange={this.props.setNodeRequest} checked={this.props.connection === 'node'}></input>
                </div>
            </div>
            <input id="submitbtn" type="submit" value="Search"></input>
          </form>
        </div>
      );
    };
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        connection: state.connection,
        theme: state.theme
    }
};

const mapDispatchToProps = (dispatch) => ({
    setAjaxRequest: () => dispatch(setAjaxRequest()),
    setImdbRequest: () => dispatch(setImdbRequest()),
    setNodeRequest: () => dispatch(setNodeRequest()),
    updateInput: (input) => dispatch(updateInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
