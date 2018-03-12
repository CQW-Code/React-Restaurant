import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    textSize: '14px',
    color: 'black',
  }
}


const NavBar =({history}) =>(
  <nav>
    <NavLink 
    exact 
    activeStyle={styles.active} 
    to= "/">Menu
    </NavLink>
    {'  '}
    <NavLink 
    exact 
    activeStyle={styles.active} 
    to = '/about'>
    About
    </NavLink>

  </nav>

)



export default withRouter(NavBar);