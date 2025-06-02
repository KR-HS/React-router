import axios from 'axios';

function App(){
    // npm install axios

    async function some(){
        return "hello";
    }
    const handleClick = async()=>{
        // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        // .then( response => {
        //     console.log(response);
        //     console.log(response.data);
        // })

        // 무한콜백

        // 비동기
        // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        // .then( response => {
        //     console.log(response.data);
        //     console.log(1);

        //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        //     .then( response => {
        //         console.log(response.data);
        //         console.log(2);

        //         axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        //         .then( response => {
        //             console.log(response.data);
        //             console.log(3);
        //         })
        //     })
        // })

        // 규칙1 - await키워드는 async 함수 안에서 사용할 수 있음
        // 규칙3 - 리턴이 프로미스라면 await를 붙이고 then을 생략가능
        // 장점 - 코드의 간결성
        // 장점 - 동기적으로 변하게 됨
        const response = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        console.log(response);

        const response2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
        console.log(response2);
        
        
        const response3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
        console.log(response3);
        
        const response4 = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        const result = await response4.json();
        console.log(result);
        
    }




    return(
        <>
            <h3>엑시오스 사용</h3>
            <button type = "button" onClick={handleClick}>데이터 처리</button>
        </>
    )
}

export default App;