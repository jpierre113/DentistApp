import React, {Component} from 'react';

class Contact extends Component{
  render(){
    return(
      <div className="row">
        <div className="column">
            <h1>Contact</h1>
            <p>
              Our office is located in Gotham City.
            </p>
            <p>Phone: 999-999-9999</p>
            <p>Fax: 111-111-1111</p>
            <p>Email: service@tooth.com</p>
          </div>
          <div className="column">
            <img src="https://img.icons8.com/carbon-copy/2x/phone.png"/>
        </div>
      </div>
    )
  }
}

export default Contact;
