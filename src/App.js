import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetails from './Component/PostDetails/PostDetails';
import Admin from './Component/Admin/Admin';
function App() {
  return (
    <Routes>
      <Route index path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/post/:postId' element={<PostDetails/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='*' element={<NoMatch/>}></Route>
     
    </Routes>
  );
}

export default App;
