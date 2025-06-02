import {createSlice} from '@reduxjs/toolkit';

// 순수 리덕스 = 리듀서 사용
// 리덕스 툴킷 = slice객체 제공

const countSlice = createSlice({
    name : 'count', // 이름
    initialState : {value:0}, // state초기값
    reducers: { // 첫번째 매개변수에 state를 받고, 두번째 매개변수는 action을 받을 수 있음
        increase : (state) => {
            state.value +=1; // 리덕스 툴킷에서는 state를 바로 변경 가능
        },
        decrease : (state) => {
            state.value -=1;
        }

    }
});


export const {increase,decrease} = countSlice.actions; // 리듀서 반환
export default countSlice.reducer;