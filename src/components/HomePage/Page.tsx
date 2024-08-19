import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import NotFound from "../NotFound";
import About from "../forTest/About";
import Tmp1 from "../forTest/Tmp1";
import LogInPage from "../LogInPage/LogInPage";
import SignUpPage from "../LogInPage/SignUpPage";
import MainPost from "../DiscussionsAndPosts/MainPost";
import MainAddPost from "../DiscussionsAndPosts/MainAddPost";
import HomePage from "./homePage";

function Page(){
    // @ts-ignore
    return(
        <>

            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/LogIn"/>} />
                    <Route path="/about" element={<About/> } />
                    <Route path="/LogIn" element={<LogInPage/> } />
                    <Route path="/SignUp" element={<SignUpPage/> } />
                    <Route path="/Post" element={<MainPost/>}/>
                    <Route path="/AddPost" element={<MainAddPost/>}/>
                    <Route path="/MainHome" element={<HomePage/>}/>

                    <Route path="/tmp">
                        <Route path="tmp1" element={<Tmp1/>} />
                        <Route path="tmp2" element={<div>demo tmp2</div>} />
                        <Route path="tmp3" element={<div>demo tmp3</div>} />
                        <Route path="tmp4" element={<div>demo tmp4</div>} />
                    </Route>
                    <Route path="*" element={<NotFound/> } />
                </Routes>
            </Router>
        </>
    );
}
export default Page;