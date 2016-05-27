import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopMenu from '../components/TopMenu';

const propTypes = {
  topMenu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
}).isRequired).isRequired,
  children: PropTypes.object
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <TopMenu items={this.props.topMenu} />

          <div className="container main">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-xs-12">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default connect((state) => {
  return {...state};
})(App);

App.propTypes = propTypes;