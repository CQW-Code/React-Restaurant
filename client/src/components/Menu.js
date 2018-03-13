import React from 'react';
import axios from 'axios';
import Form from './Form';

class Menu extends React.Component {

state = {menus: {}, edit: false}

componentDidMount() {
  axios.get(`/api/menu/${this.props.match.params.id}`)
    .then( res => this.setState({ menu: res.data }) )
}

toggleEdit=() => {
  this.setState(state=> {
    return {edit: !this.State.edit}
  });
}

submit = (menu)=>{
  axios.put(`/api/menus/${this.props.match.params.id}`, {menu})
    .then(res => this.setState({menu: res.data, edit: false})
  );
}

show() {
  let {menu: {name, description, price, timeofday}}=this.state;

  return(
    <div>
    <h2>Menu Items</h2>
    <h2>{name}</h2>
    <h3>{description}</h3>
    <h3>{price}</h3>
    <h3>{timeofday}</h3>
    </div>
  )
}

edit() {
  return <Form {...this.state.menu} submit= {this.submit}/>
  }

  render() {
   let {edit} = this.state;
   return (
    <div>
      { edit ? this.edit() : this.show() }
      <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
    </div>
  )
}
  
}


export default Menu

