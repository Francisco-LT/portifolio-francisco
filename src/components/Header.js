import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="headerMenu">
        <p className="textHeader">Francisco Lira Torres</p>
        <Link className="about" to="/about">Sobre</Link>
      </div>
    )
  }
}

export default Header;