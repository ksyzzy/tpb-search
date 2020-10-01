import React from 'react';
import { connect } from 'react-redux';
import './styles/Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className={`Footer-component ${this.props.theme}`}>
                <footer>
                    <hr />
                    Made by kushiji with React 2020
                </footer>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    theme: state.theme
});

export default connect(mapStateToProps, null)(Footer);
