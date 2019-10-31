import React, {Component} from 'react';

class Procedures extends Component{
  render(){
    return(
      <div className="row">
          <div className="column">
            <h1>Procedures</h1>
            <p>
              We offer:
              <p>Teeth Whitening</p>
              <p>Fillings</p>
              <p>Dentures</p>
              <p>Veneers</p>
              <p>Implants</p>
            </p>
          </div>
          <div className="column">
            <img src="https://icons-for-free.com/iconfiles/png/512/dental+care+dental+checking+dentist+dentistry+oral+hygiene-1320165687002052014.png" className="procedureImg"/>
        </div>
      </div>
    );
  }
}

export default Procedures;
