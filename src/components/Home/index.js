import React from 'react';
import { TypeChooser } from "react-stockcharts/lib/helper";

import Header from './../Header';
import Chart from './chart';
import Loader from './../Loader';

class Home extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.props.getHistoryData(this.props.setHistoryData)
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    if(this.props.history !== nextProps.history){
      this.props = nextProps;
    }
    this.parseDataNStoreInState();
  }

  parseDataNStoreInState(){
      let arr = [];
      var data = this.props.history.Data;
      for(var i = 0; i < data.length; i++){
        var d = data[i].split(',');
        arr.push({
          'date': new Date(parseInt(d[0])),
          'open': d[1],
          'high': d[2],
          'low': d[3],
          'close': d[4],
          'value': d[5]
        })
      }
      this.setState({
        data: arr
      })
  }

  render () {
    return(
      <div className="page-wrapper">
        <Header {...this.props} />
        <div className="content-wrapper">
          <div className="container">
            <h1>Dashboard</h1>
            {this.props.history.Data && this.props.history.Data.length && this.state.data && this.state.data.length ?
              <div className="chart-container">
               <TypeChooser>
        			 	{type => <Chart type={type} data={this.state.data} />}
        			 </TypeChooser>
               </div>
               : <Loader />
             }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
