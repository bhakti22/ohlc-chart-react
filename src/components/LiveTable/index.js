import React from 'react';

import { subscribe, unSubscribe } from './../../api/socketio';

import Header from './../Header';
import Table from './table';

class LiveTable extends React.Component{
  constructor (props){
    super(props);
    this.state = {response: ''}
  }

  componentDidMount () {
    subscribe();
  }

  UNSAFE_componentWillReceiveProps (nextProps, state) {
    if(this.props !== nextProps){
        this.props = nextProps;
    }
  }

  componentWillUnmount () {
    unSubscribe()
  }

  render () {
    return(
      <div className="page-wrapper">
        <Header {...this.props} />
        <div className="content-wrapper">
          <div className="container">
            <h1>Live Table</h1>
            {this.props.liveData.Data.length ?
              <Table liveData={this.props.liveData} />
              : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

export default LiveTable;
