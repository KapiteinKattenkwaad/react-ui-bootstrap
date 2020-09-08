import React from 'react';

import './../css/App.css';

import AddApointment from './AddAppointment'
import ListApopintment from './ListApointment'
import SearchApointment from './SearchAppointment'

function App() {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddApointment/>
              <SearchApointment/>
              <ListApopintment />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
