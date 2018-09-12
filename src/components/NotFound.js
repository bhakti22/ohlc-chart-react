import React from 'react';
import Header from './Header';

class NotFound extends React.Component{
	render(){
		return(
			<div className="page-wrapper">
        <Header {...this.props} />
        <div className="content-wrapper">
          <div className="container">
            <div className="text-center">Page you are trying to reach is not available!</div>
          </div>
        </div>
      </div>
		)
	}
}

export default NotFound;
