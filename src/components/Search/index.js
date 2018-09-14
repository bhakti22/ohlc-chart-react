import React from 'react';

import Header from './../Header';
import Table from './table';
import Loader from './../Loader';

class Search extends React.Component{
    constructor (props) {
      super(props);
      this.state = {
        filterKey : '',
        filterKeyEscaped: '',
        filterData: [],
        loading: true,
        paginationLimit: 10,
        paginationEnd: 10,
      }
    }
    UNSAFE_componentWillMount () {
      if(this.props.search.UserData && this.props.search.UserData.length && !this.props.search.FormatedData.length){
        this.formatUserData(this.props.setUserFormatedData)
      }
    }
    componentDidMount () {
      if(this.props.search.FormatedData && this.props.search.FormatedData.length){
        this.setState({
          formatedUserData: this.props.search.FormatedData
        }, this.setLoadingState(false)
        )
      }
    }
    UNSAFE_componentWillReceiveProps (nextProps) {
      if(this.props !== nextProps){
        this.props = nextProps
      }
      this.setState({
        formatedUserData: this.props.search.FormatedData
      }, this.setLoadingState(false)
    )
  }

    setLoadingState (val) {
      this.setState({
        loading: val
      })
    }

    // setSearchBtnState (val) {
    //   this.setState({
    //     searchBtnDisabled: val
    //   })
    // }

    formatUserData (cb) {
        var newArr = JSON.parse(JSON.stringify(this.props.search.UserData));
        newArr.reduce((arr, data) => {
          data['address'] = {}
          data['address']['house_number']= data['house_number'];
          data['address']['street_name']= data['street_name'];
          data['address']['city']= data['city'];
          data['address']['state']= data['state'];
          data['address']['pincode']= data['pincode']

          delete data['house_number'];
          delete data['street_name']
          delete data['city']
          delete data['state']
          delete data['pincode']

          data['tags'] = [data['tag1'], data['tag2'], data['tag3']]
          delete data['tag1'];
          delete data['tag2'];
          delete data['tag3'];

          data['name'] =  {}
          data['name']['first'] = data['first_name'];
          data['name']['last'] = data['last_name'];
          delete data['first_name'];
          delete data['last_name']
          arr.push(data)
          return arr;
        }, []);
        cb(newArr)
      }

      escapeRegExp (){
        const filterKey = this.state.filterKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        this.setState({
          filterKeyEscaped: filterKey
        })
      }

      checkValue (query, type) {
        const regExp = new RegExp(this.state.filterKeyEscaped, "i");
        switch (type) {
          case 'string':
              return regExp.test(query);
          case 'object':
              for(var key in query){
                if(query[key].match(regExp)) {
                  return true;
                }
              }
              return false;
          case 'array':
              return query.some(tag => tag.match(regExp));
          default:
            return false;
        }
      }

      // for faster response implement pagination
      // filterData (intStart) {
      filterData () {
        // this.setSearchBtnState(false)
        this.escapeRegExp();
        const data = this.props.search.FormatedData.reduce((newArr, value , index) => {
          if(this.checkValue(value['name'], 'object') ||
              this.checkValue(value['tags'], 'array') ||
                this.checkValue(value['address'], 'object') ||
                  this.checkValue(value['email'], 'string')
          ) {
            newArr.push(value); index++
          }
          return newArr;
        }, []);
        this.setState({
          filterData: [...this.state.filterData, ...data]
        }, () => {
          this.setLoadingState(false);
          // this.setSearchBtnState(true)
        })
      }

    handleSearchInputKeyup (e) {
      e.preventDefault()
      const query = e.target.value;

      this.setState({
        filterKey : e.target.value,
        paginationEnd: this.state.paginationLimit,
        filterData: []
      });

      if(query !== '') {
        // this.setSearchBtnState(true);
        this.setLoadingState(true);
        setTimeout(() => {
          // wait for 300 milliseconds after keyup
          // pass value after last keyup
          // countinuous filter can break the performance
          if(query === this.state.filterKey) this.filterData()
        }, 600)
      }else{
        this.setLoadingState(false);
      }
    }

    handleLoadMore () {
      this.setState({
        paginationEnd: this.state.paginationEnd + this.state.paginationLimit
      })
    }

    render () {
      const data = (this.state.filterKey === '' && this.state.formatedUserData) ? this.state.formatedUserData : (this.state.filterData ? this.state.filterData : []);
      return(
        <div className="page-wrapper">
          <Header {...this.props} />
          <div className="content-wrapper">
            <div className="container">
              {/*
                <div className="input-group">
                 <input type="text" className="form-control" placeholder="Search for..." onChange={(e) => this.handleSearchInputKeyup(e)} value={this.state.filterKey} />
                 <span className="input-group-btn">
                   <button className="btn btn-default" type="button" onClick={() => this.filterData()} disabled={this.state.searchBtnDisabled}>Go!</button>
                 </span>
               </div>
               */}
               <div className="row">
                 <div className="pull-right col-lg-6 search-block-wrapper">
                   <input type="text" className="form-control" placeholder="Search for..." onChange={(e) => this.handleSearchInputKeyup(e)} value={this.state.filterKey} />
                 </div>
               </div>
              {this.state.loading ?
                  <Loader />
                  :
                    data.length ?
                      <React.Fragment>
                        <Table {...this.props} paginationEnd={this.state.paginationEnd} data={data} />
                        {
                          this.state.paginationEnd < data.length?
                            <div className="text-center"><button className="load-more" onClick={() => this.handleLoadMore()}>Load more...</button></div>
                          :
                            ''
                        }
                      </React.Fragment>
                    :
                    <div className="well">No match found!</div>
              }
            </div>
            </div>
        </div>
      )
    }
}

export default Search;
