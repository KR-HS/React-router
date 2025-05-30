import { useParams } from "react-router-dom";


function Info(){

    const params = useParams();
    const age = params.age;
    return(
        <>
            <h3>정보페이지입니다</h3>
            넘어온값:{age}
        </>
    )
}

export default Info;