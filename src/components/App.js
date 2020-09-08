import React, { Component } from 'react';

import './../css/App.css';

import AddApointment from './AddAppointment'
import ListApopintment from './ListApointment'
import SearchApointment from './SearchAppointment'

class App extends Component {

  constructor() {
    super();
    this.state =  {
      myAppointments: []
    }
  };

  componentDidMount() {
    let response = ''
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        })
        this.setState({
          myAppointments: apts
        })
      })

  }

  render() {

    const listItems = this.state.myAppointments.map(item => (
      <div>{item.petName}  </div>
    ));

    return(
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {listItems}
                <AddApointment/>
                <SearchApointment/>
                <ListApopintment />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default App;
