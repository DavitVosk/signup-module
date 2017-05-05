import React from 'react';
import ProgressBar from '../../common/ProgressBar/ProgressBar';
import SuccessView from './SuccessView';

const Step3 = (props) => (
    <div className='Step3' style={{ paddingBottom: 40 }}>
        <ProgressBar step={3} title='Thank you!' />
        <SuccessView />
    </div>
);

export default Step3;
