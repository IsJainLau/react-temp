import React from 'react';
import Login from './pages/login.jsx'

class App extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      qty: 121423423
    }
  };

  changeQty = () => {
    this.setState({
      qty: this.state.qty + 1
    })
  };

  componentDidMount() {
    console.log('DidMount')
  };

  render() {
    return (
      <div>
        <div>
          {this.state.qty}
          <button onClick={this.changeQty}>
            点我
          </button>
        </div>
        <div>
          <Login />
        </div>
      </div>
    )
  };
}

export default App;
