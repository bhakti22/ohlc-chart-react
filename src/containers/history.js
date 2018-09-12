import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHistoryData } from './../api';
import { setHistoryData } from './../actions';

import Home from './../components/Home';

const mapStateToProps = (state) => {
  return {
    history: state.HistoryData
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    getHistoryData,
    setHistoryData,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
