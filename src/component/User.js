import { useLocation, useSearchParams } from "react-router-dom";


function User(){

    // 쿼리스트링받기
    // 1st
    // const location = useLocation();
    // console.log(location);


    //2st
    // 반환 - 첫매개변수는 url값, 두번째 매개변수는 url을 변경할수있는 함수
    const [param,setParam] = useSearchParams();

    // console.log(param);
    // console.log(setParam);

    const id = param.get("id");
    const addr = param.get("addr");
    


    return(
        <>
            <h3>유저페이지입니다. {id}, {addr}</h3>
        </>
    )
}

export default User;