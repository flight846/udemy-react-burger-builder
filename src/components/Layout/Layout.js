import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Auxi>
                <Toolbar drawerToggleClicked={ this.sideDrawerToggleHandler }/>
                <SideDrawer open={ this.state.showSideDrawer }clicked={ this.sideDrawerHandler }/>
                <main className={classes.Content}>
                    { this.props.children }
                </main>
            </Auxi>
        )
    }
}

export default Layout;

