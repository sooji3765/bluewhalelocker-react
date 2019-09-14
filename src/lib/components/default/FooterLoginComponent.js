import React, { Component } from 'react';

class FooterLoginComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      ...this.props
    })
  }

  render() {

    if (!this.state) {
      return (
        <>
        </>
        )
    }

    return (
      <>
      <div id="footer-menu">
        {/* <a href=""><i className="fa fa-search"></i><span>Info</span>
        </a> */}
	  	</div>
      </>
    );
  }
}

export default FooterLoginComponent;
