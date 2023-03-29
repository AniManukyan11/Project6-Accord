import React, { Component } from 'react';

export default class Accordion extends Component {
  state = {countries:[],isActive:false}
  componentDidMount(){
    fetch('https://countriesnow.space/api/v0.1/countries/capital').then(res=>res.json()).then((res)=>{
      console.log(res);
      this.setState({countries:res.data})
    })
  }

  changeIsActive= (id)=>{
    if(id === this.state.isActive){

      this.setState({isActive:false});
      return;
    }
    this.setState({isActive:id})
  }

  render() {
    return (
      <div>
        {this.state.countries.map((country, i)=>{
          return(
            <div key={i}>
              <p onClick={()=>this.changeIsActive(country.iso2)}>{country.name}{this.state.isActive === country.iso2 ? '-' : '+'}</p>

              {this.state.isActive === country.iso2 && <p>{country.capital}</p>}
            </div>
          )
        })}
      </div>
    );
  }
}

