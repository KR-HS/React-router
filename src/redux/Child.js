import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./CountReducer";
import { useState } from "react";
import { setName } from "./UserReducer";


function Child(){


    
    const count = useSelector( state => state.count.value);
    const dispatch = useDispatch();

    // 추가된 리듀서
    const [text,setText] = useState('');
    const name = useSelector(state=>state.user.name);
    return (
        <>
            <h3>자식 컴포넌트</h3>

            현재 카운트 : {count}

            <button type='button' onClick={() => dispatch(increase())}>증가</button>
            <button type='button' onClick={() => dispatch(decrease())}>감소</button>

            <h3>새로운 리덕스 상태변수</h3>
            <input type = "text" onChange={e=>setText(e.target.value)} value={text}/>
            <button type='button' onClick={()=>dispatch(setName(text))}>저장</button>
            <br/>
            현재 이름 : {name}
        </>
    )
}

export default Child;