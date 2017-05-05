import React from 'react';

import './index.css';

const ProgressBar = (props) => {
    const { step, title } = props;

    const percentCompleted = step / 3 * 100;

    const completed = `${percentCompleted}%`;
    const uncompleted = `${1 - percentCompleted}%`;

    return (
        <div className='completed-bar'>
            <div className='title'>{title}</div>
            <div className='completed-container'>
                <div style={{ width: completed }} className='completed'></div>
                <div style={{ width: uncompleted }} className='uncompleted'></div>
            </div>

        </div>
    );
}

export default ProgressBar;
