import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { toggleLightTheme, toggleDarkTheme, openSidemenu, closeSidemenu } from '../actions/actions';
import './styles/Menu.css';

export class Menu extends React.Component {
    toggleMenu = () => {
        switch(this.props.sidemenuOpen) {
            case true:
                document.getElementsByClassName("sidebar")[0].style.width = "0";
                document.getElementsByClassName("openbtn")[0].style.marginLeft = "0%";
                this.props.closeSidemenu();
                break;
            case false:
                document.getElementsByClassName("sidebar")[0].style.width = "20%";
                document.getElementsByClassName("openbtn")[0].style.marginLeft = "20%";
                this.props.openSidemenu();
                break;
            default:
                break;
        }
    };
    
    toggleTheme = () => {
        switch(this.props.theme) {
            case "theme1":
                this.props.toggleDarkTheme();
                document.body.id = "theme2";
                break;
            case "theme2":
                this.props.toggleLightTheme();
                document.body.id = "theme1";
                break;
            default:
                break;
        }
    };

    render() {
      return (
        <div className={`Menu-component ${this.props.theme}`}>
          <div className="colorbar">
          </div>
            <div className="sidebar">
                <nav>
                    <Link to="/">Homepage</Link>
                    <Link to="/history">Search history</Link>
                </nav>
                <button className="themebtn" onClick={this.toggleTheme.bind(this)}>{this.props.theme === "theme1" ? "Dark Theme" : "Light Theme"}</button>
            </div>
            <div className="Menu-button">
                <button className="openbtn" onClick={this.toggleMenu.bind(this)}>&#9776;</button>
            </div>
        </div>
      );
    };
};

const mapStateToProps = (state) => ({
    theme: state.theme,
    sidemenuOpen: state.sidemenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
    openSidemenu: () => dispatch(openSidemenu()),
    closeSidemenu: () => dispatch(closeSidemenu()),
    toggleLightTheme: () => dispatch(toggleLightTheme()),
    toggleDarkTheme: () => dispatch(toggleDarkTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
