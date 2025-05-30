import { Outlet, useNavigate } from "react-router-dom";


function Header(){

    // 뒤로가기, 앞으로가기, 특정라우터로 가기
    const nav = useNavigate()

    return(
        <>
            <header style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h3>공통으로 사용하는 헤더입니다</h3>
                <button type="button" onClick={()=>nav('/')}>홈</button>
                <button type="button" onClick={()=>nav('/user')}>유저</button>
                <button type="button" onClick={()=>nav(-1)}>뒤로가기</button>
            </header>


            <Outlet/>
        </>
    )
}

export default Header;