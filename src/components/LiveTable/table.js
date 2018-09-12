import React from  'react';
import Moment from 'moment';

class Table extends React.Component {

    UNSAFE_componentWillReceiveProps (nextProps, state) {
      if(this.props.liveData.Data !== nextProps.liveData.Data){
          this.props = nextProps;
      }
    }

    render() {
      return (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.props.liveData && this.props.liveData.Data && this.props.liveData.Data.length && this.props.liveData.Data.reverse().map((data, i) => {
                    return (<tr key={data[0]}>
                      <td>{Moment.utc(parseInt(data[0])).format('DD/MM/YYYY hh:mm:ss.SSS')}</td>
                      <td>{data[1]}</td>
                      <td>{data[2]}</td>
                      <td>{data[3]}</td>
                      <td>{data[4]}</td>
                      <td>{data[5]}</td>
                      </tr>)
                    })
                }
            </tbody>
          </table>
        </div>
      )
  }
}

export default Table;
