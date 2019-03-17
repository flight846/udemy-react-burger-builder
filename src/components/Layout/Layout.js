import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';

const Layout = (props) => (
    <Auxi>
        <div>Toolbar, Sidedrawer, Backdrop </div>
        <main className={ classes.Content }>
            { props.children }
        </main>
    </Auxi>
)

export default Layout;

