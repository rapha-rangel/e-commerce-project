import { useState } from "react";
import Header from "../../components/Header";
import MainLogin from "../../components/MainLogin";
import Question from "../../components/Question";

const Login = () => {
  return (
    <div>
      <Header/>
      <MainLogin/>
      <Question/>
    </div>
  )
  
}

export default Login;
