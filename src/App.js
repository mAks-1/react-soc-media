import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/Main/NavBar/NavBar";
import MyPage from "./Components/Main/MyPage/MyPage";
import Videos from "./Components/Main/Videos/Videos";
import Dialogs from "./Components/Main/Dialogs/Dialogs";
import NewsfeedContainer from "./Components/Main/Newsfeed/NewsfeedContainer";
import SignIn from "./Components/Main/Sign-in-up/Sign-in";
import SignUp from "./Components/Main/Sign-in-up/Sign-up";
import FriendsContainer from "./Components/Main/Friends/FriendsContainer";
import PhotosContainer from "./Components/Main/Photos/PhotosContainer";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Main>
                <NavBar/>
                <Routes>
                    <Route path="/react-soc-media" element={<SignIn/>}/>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>

                    <Route path="/home-page" element={<MyPage/>}/>
                    <Route path="/newsfeed" element={<NewsfeedContainer/>}/>
                    <Route path="/friends" element={<FriendsContainer/>}/>
                    <Route path="/chats" element={<Dialogs/>}/>
                    <Route path="/photos" element={<PhotosContainer/>}/>
                    <Route path="/videos" element={<Videos/>}/>
                </Routes>
            </Main>
        </div>
    );
}
export default App;


// import firebase from "firebase/compat/app";
// import 'firebase/database';
// import 'firebase/auth';
// import {Component} from "react";
//
// export default class App extends Component {
//     componentDidMount(){
//         const db = firebase.database();
//         console.log(db)
//     }
//
//
//     render() {
//         return (
//             <div className="App">
//                 <Header/>
//                 <Main>
//                     <NavBar/>
//                     <Routes>
//                         {/*<Route path="/" element={<SignIn/>}/>*/}
//                         <Route path="/react-soc-media" element={<SignIn/>}/>
//                         <Route path="/" element={<SignIn/>}/>
//                         <Route path="/sign-in" element={<SignIn/>}/>
//                         <Route path="/sign-up" element={<SignUp/>}/>
//
//                         <Route path="/home-page" element={<MyPage/>}/>
//                         <Route path="/newsfeed" element={<NewsfeedContainer/>}/>
//                         {/*<Route path="/friends" element={<Friends friends={props.props.friendsInfo.friends}/>}/>*/}
//                         <Route path="/friends" element={<FriendsContainer/>}/>
//                         <Route path="/chats" element={<Dialogs/>}/>
//                         {/*<Route path="/photos" element={<Photos photos={props.props.userPhotos.photos}/>}/>*/}
//                         <Route path="/photos" element={<PhotosContainer/>}/>
//                         <Route path="/videos" element={<Videos/>}/>
//                     </Routes>
//                 </Main>
//             </div>
//         )
//     }
// }