import React from 'react';

class Login extends React.Component {
    state = {
        qty: 133
    }

    // changeQty() {
    //     qty = this.state.qty + 1
    // }

    render() {
        return (
            <div>
                {this.state.qty}
            </div>
        )
    }
}

export default Login;