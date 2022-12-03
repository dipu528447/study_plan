import React from 'react';

const Break = props => {
    return (
        <div className='col-2 ms-1'>
            <button className='fs-6 mt-2 rounded-circle' onClick={() => props.addBreakingTime(props.breaks)}>{props.breaks}<span>m</span></button>
        </div>
    );
};

export default Break;