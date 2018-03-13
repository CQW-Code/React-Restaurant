import React from 'react';

class Form extends React.Component {
  defaultValues = {name: '', description: '', price: '', timeofday: ''}
  state = {...this.defaultValues}

  componentDidMount() {
    if(this.props.id)
      this.setState({...this.props})
  }
  
  
  handleSubmit = (e) =>{
    e.preventDefault();
    let menu = {...this.state}
    this.props.submit(menu)
    this.setState({...this.defaultValues})
  }

  handleChange=(e) =>{
    let {target: {id, value}}=e;
    this.setState({[id]: value})

  }

  render() {
    let {name, description, price, timeofday} = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          id= 'name'
          placeholder= "Dish"
          value= {name}
          onChange = {this.handleChange}
          required
          />

          <input
          id= 'description'
          placeholder= "Description"
          value= {description}
          onChange = {this.handleChange}
          required
          />

          <input
          id= 'price'
          placeholder= "Price"
          value= {price}
          onChange = {this.handleChange}
          required
          />

          <input
          id= 'timeofday'
          placeholder= "Breakfast, Lunch or Dinner"
          value= {timeofday}
          onChange = {this.handleChange}
          required
          />
          <button>Submit</button>
          </form>
    )
  }

}

export default Form;