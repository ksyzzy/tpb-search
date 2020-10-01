import React from 'react';
import { connect } from 'react-redux';
import { openSidemenu, closeSidemenu } from '../actions/actions';
import './Menu.css';

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

    render() {
      return (
        <div className="Menu-component theme1">
          <div className="colorbar">
          </div>
            <div className="sidebar">
                <nav>
                    <a href="#">Homepage</a>
                    <a href="#">Search history</a>
                </nav>
                <button className="themebtn">Dark Theme</button>
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
    sidemenuOpen: state.sidemenuOpen
});

const mapDispatchToProps = (dispatch) => ({
    openSidemenu: () => dispatch(openSidemenu()),
    closeSidemenu: () => dispatch(closeSidemenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
