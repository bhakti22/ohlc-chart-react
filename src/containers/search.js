import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from './../components/Search';

import { setUserFormatedData } from './../actions';

const mapStateToProps = (state) => {
  return {
    search: state.Search
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUserFormatedData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
