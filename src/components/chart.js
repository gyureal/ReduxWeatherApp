import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

// 반복되는 코드가 있다면 컴포넌트로 빼야한다는 신호입니다.
export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
        </div>
    );
}