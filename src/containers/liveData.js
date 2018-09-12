import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LiveTable from './../components/LiveTable';
import { setLiveData } from './../actions';

const mapStateToProps = state =>  {
  return{
    liveData: state.LiveData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setLiveData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveTable)
