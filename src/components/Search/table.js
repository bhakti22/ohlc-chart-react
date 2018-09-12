import React from  'react';

class Table extends React.Component {
  render() {
      return (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>

                {this.props.data.map((data, i) => {
                  if(i < this.props.paginationEnd){
                  return (<tr key={data.id}>
                    <td>{data.name.first} {data.name.last}</td>
                    <td>{data.email}</td>
                    <td>{data.address.house_number},
                      {data.address.street_name},
                      {data.address.city},
                      {data.address.state},
                      {data.address.pincode}
                    </td>
                    <td>
                      {data.tags ? data.tags.map((tag, j) =>{
                        if(j !== 0)
                          return <React.Fragment key={j}>, {tag}</React.Fragment>
                        else
                          return <React.Fragment key={j}>{tag}</React.Fragment>
                      }) : ''}
                    </td>
                    </tr>)
                  }
                  })
                }
            </tbody>
          </table>
        </div>
      )
  }
}

export default Table;
