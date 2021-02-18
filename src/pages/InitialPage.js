import { Component } from 'react';
import Header from '../components/Header';
import HelloText from '../components/HelloText';

class InitialPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HelloText />
      </div>
    )
  }
}

export default InitialPage;