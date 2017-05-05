import React, { Component } from 'react';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';

import './index.css';

class BottomBar extends Component {
    render() {
        const { withoutBack, withoutNext, onNextClick, goBack } = this.props;

        const actionButtonsStyles = { justifyContent: 'space-between' };

        if (withoutNext) {
            actionButtonsStyles.justifyContent = 'flex-start';
        }

        if (withoutBack) {
            actionButtonsStyles.justifyContent = 'flex-end';
        }

        return (
            <div className='BottomBar'>
                <div className='divider'>
                    <hr />
                </div>
                <div className='action-buttons' style={actionButtonsStyles}>
                    { ! withoutBack && <div className='back-container' onClick={() => goBack()}>
                        <span className='button back'>Back</span>
                    </div>}
                    { ! withoutNext && <div className='next-container' onClick={() => onNextClick()}>
                        <span className='button next'>Next</span>
                        <img className='next-image' src={require('./next-arrow.jpg')} alt='next' />
                    </div>}
                </div>
            </div>
        );
    }
}

export default connect(null, { goBack })(BottomBar);
