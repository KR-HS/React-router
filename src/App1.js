import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import User from "./component/User";
import Info from "./component/Info";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Header from "./component/Header";
import Mypage from "./component/Mypage";

function App() {


/* 
1. 라우터를 사용하려면 index.js에서 BrowserRouter로 감싸줌
2. Ruotes를 이용해서 경로에 대한 컴포넌트를 지정
*/


  return (
    <Routes>
      <Route element={<Header/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        {/* 쿼리 파라미터 */}
        <Route path='/info/:age' element={<Info/>}/>
      </Route>
      {/* 글과 글상세를 각각 사용하는 경우 */}
      {/* 
      <Route path='/board' element={<Board/>}/>
      <Route path='/board/:bno' element={<BoardContent/>}/> 
      */}

      <Route path='/board' element={<Board/>}>
        <Route path=':bno' element={<BoardContent/>}/>
      </Route>


      <Route path='/mypage' element={<Mypage/>}/>

    </Routes>
  );
}

export default App;
