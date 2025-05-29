import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import User from "./component/User";
import Info from "./component/Info";

function App() {


/* 
1. 라우터를 사용하려면 index.js에서 BrowserRouter로 감싸줌
2. Ruotes를 이용해서 경로에 대한 컴포넌트를 지정
*/


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/info' element={<Info/>}/>
    </Routes>
  );
}

export default App;
