import React, { Component } from 'react';
import Loader from 'react-loader';
import styles from './styles';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: true
        }
    }

    setAppState = (newState) => this.setState(newState);

    render() {
        return (
            <Loader loaded={this.state.loaded}>
                <div style={styles}>
                    {React.cloneElement(this.props.children, { setAppState: this.setAppState })}
                </div>
            </Loader>
        );
    }
}

export default connect((state) => {
    return { state }
})(App);
