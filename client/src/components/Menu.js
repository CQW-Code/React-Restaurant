import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

state = {menu: []}


  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ menus: res.data }) )
  }

  render() {
    let { menus } = this.state;
    return (
      <ul>
       { menus.map( m => 
           <li key={m.id}>
             <Link to={`/menus/${m.id}`}>{m.name}</Link>
           </li> 
         ) 
       }
     </ul>
   )
 }
}

export default Menu;