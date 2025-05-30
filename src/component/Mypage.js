import { Navigate, useNavigate } from "react-router-dom";



function Mypage(){
    
    const loginYn = false; // 로그인x

    // 권한에 대한 검사
    // 첫 렌더링 과정에서 useNavigate는 사용하지 못함
    // const nav = useNavigate();
    // if(!loginYn){
    //     nav('/');
    // }

    // 렌더링 과정에 권한 검사를 통해 다른 페이지로 보냄
    if(!loginYn){
        return <Navigate to='/' replace={true}/>;
    }
    return(
        <>
            <h3>권한이 있는 사람만 들어올 수 있음</h3>
        </>
    )
}

export default Mypage;