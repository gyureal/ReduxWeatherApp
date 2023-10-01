import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER: 
        // return [ action.payload.data ];             // X 검색한 데이터로 바꾸는 것이 아닌, 기존에 있던 Weather 데이터에 추가되어야한다.
        // return state.push(action.payload.data);     // X state는 기존의 값이 수정되는 것이 아닌, 새 객체가 할당되어야한다. (immutable)
        // return state.concat(action.payload.data);   // O concat은 새로운 배열 객체를 변조(mutating) 해준다.
        return [ action.payload.data, ...state ];      // O ES6 문법을 적용하면 다음과같이 배열 변조가 가능하다.
        
    }
    return state;
}