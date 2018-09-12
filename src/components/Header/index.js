import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor (props) {
    super(props);
    const pageName = this.props.location && this.props.location.pathname && this.props.location.pathname.substring(1);
    this.state = {
      pageName: pageName ? pageName : '',
      navOpenClassName: ''
    }
  }
  toggleMobileNav () {
    this.setState({
      navOpenClassName: this.state.navOpenClassName === '' ? 'open' : ''
    })
  }
  render(){
    return(
        <div className="header-wrapper">
          <div className="container">
            <header>
              <div className="logo">
                <Link to="/">Logo</Link>
              </div>
              <div className="mobile-nav-btn" onClick={() => this.toggleMobileNav()}>
                <button className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-align-justify"></span>
                </button>
              </div>
              <div id="main-nav" className={this.state.navOpenClassName} onClick={() => this.toggleMobileNav()}>
                <nav>
                  <Link to="/" className={this.state.pageName === '' ? 'active' : ''}>
                    Home <span className="glyphicon glyphicon-signal"></span>
                  </Link>
                  <Link to="/livechart" className={this.state.pageName === 'livechart' ? 'active' : ''}>
                    Live Chart <span className="glyphicon glyphicon-stats"></span>
                  </Link>
                  <Link to="/livetable" className={this.state.pageName === 'livetable' ? 'active' : ''}>
                    Live Table <span className="glyphicon glyphicon-list-alt"></span>
                  </Link>
                  <Link to="/search" className={this.state.pageName === 'search' ? 'active' : ''}>
                    Search <span className="glyphicon glyphicon-search"></span>
                  </Link>
                </nav>
              </div>
            </header>
          </div>
        </div>
    )
  }
}
export default Header;
