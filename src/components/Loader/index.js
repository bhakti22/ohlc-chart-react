import React from 'react';

class Loader extends React.Component {
  render () {
    return (
      <div className="loading">
        <div className="animation-ring-outer">
          <div className="animation-ring-inner"></div>
        </div>
      </div>
    )
  }
}

export default Loader;
