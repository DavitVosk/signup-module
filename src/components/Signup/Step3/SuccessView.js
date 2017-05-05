import React, { Component } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class SuccessView extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    handleClose(e) {
        e.preventDefault();
        this.setState({ open: false });
    }

    render() {
        const { user } = this.props;

        const actions = [
            <FlatButton
                label='OK'
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />
        ];
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img className='success' style={{ width: '50%', marginTop: 50 }}
                     src={require('./success.jpg')} alt='Success' />
                <a style={buttonStyles} onClick={this.handleOpen}>
                    Go to Dashboard!
                    <img
                        style={{ marginLeft: 12, }}
                        src={require('../../common/BottomBar/next-arrow.jpg')}
                        alt='Next'
                    />
                </a>
                <Dialog
                    title='Signup data'
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {JSON.stringify(user)}
                </Dialog>
            </div>
        );
    }
}

const buttonStyles = {
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    borderWidth:1,
    borderStyle:'solid',
    borderColor: '#59A2E7',
    color: '#59A2E7',
    borderRadius: 10,
    fontSize: 22,
    padding: 15,
    marginTop: 35,
};

const mapStateToProps = ({user}) => {
    return { user };
}
export default connect(mapStateToProps)(SuccessView);
