import { Link } from "react-router-dom";


function Home(){

    return(
        <>
            <h3>홈입니다</h3>

            {/* 쿼리스트링 ?key=value  */}
            <Link to="/user?id=aaa123&addr=서울시">유저화면</Link>
            <Link to="/info">info화면</Link>
            
        </>
    )
}

export default Home;