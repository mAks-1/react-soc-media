import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {Route, Routes} from "react-router-dom";
import MyProfile from "./Components/Main/MyPage/MyProfile/MyProfile";
import NavBar from "./Components/Main/NavBar/NavBar";
import Newsfeed from "./Components/Main/Newsfeed/Newsfeed";
import Friends from "./Components/Main/Friends/Friends";
import Photos from "./Components/Main/Photos/Photos";
import MyPage from "./Components/Main/MyPage/MyPage";
import Videos from "./Components/Main/Videos/Videos";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main>
                <NavBar/>
                <Routes>
                    <Route path="/home-page" element={<MyPage/>}/>
                    <Route path="/newsfeed" element={<Newsfeed/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    {/*<Route path="/chats" element={}/>*/}
                    <Route path="/photos" element={<Photos/>}/>
                    <Route path="/videos" element={<Videos/>}/>
                </Routes>
            </Main>
        </div>
    );
}

export default App;
