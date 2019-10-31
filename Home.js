import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <h1>Tooth Be Told</h1>
          <p>
            Welcome to our practice.
          </p>
          <p>We strive to give you the best dental care.</p>
          <p> For more information visit Procedures</p>
          </div>
          <div className="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWY_7qYMlwp4pK4uURf2GoNgy_kAiMuRrXbO9tS6OYknA5h3HlZg&s" />
          </div>
      </div>
    );
  }
}

export default Home;
