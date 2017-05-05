import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Select from '../../../common/Select';

const HowDidYouHear = (props) => {
    const { how_did_you_hear, setHowHearSubState } = props;

    return (
        <div style={{ paddingTop: 70 }}>
            <div>WHERE DID YOU HEAR ABOUT US?</div>
            <Select name='how_did_you_hear'
                    hintText='Select how did you hear'
                    value={how_did_you_hear}
                    onChange={(e, index, value) => setHowHearSubState(value)}
                    style={{ width: '100%' }}
            >
                <MenuItem value='Google' primaryText='Google' />
                <MenuItem value='Friend' primaryText='Friend' />
                <MenuItem value='Colleague' primaryText='Colleague' />
                <MenuItem value='Other' primaryText='Other' />
            </Select>
        </div>
    );

}

export default HowDidYouHear;
