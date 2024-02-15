import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setIsLogin } from '../../redux/reducers/list';

const MainLogin = () => {
  const [showInputUser, setShowInputUser] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [showInputPass, setShowInputPass] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputUsername = (e)=>{
    setInputUsername(e.target.value)
    if(e.target.value.length > 0){
      setShowInputUser(true)
    }else{
      setShowInputUser(false)
    }
  }

  const handleInputPassword = (e)=>{
    setInputPassword(e.target.value)
    if(e.target.value.length > 0){
      setShowInputPass(true)
    }else{
      setShowInputPass(false)
    }
  }

  const handleLogin = ()=>{
    dispatch(setIsLogin());
    navigate('/main');
  }

  return (
    <div className='bg-gray-200 py-16 grid justify-items-center gap-y-8 '>
      <h2 className='text-xl font-bold'>Iniciar Sessão</h2>
      <div className='grid relative'>
        <input 
          type="text"
          class="peer/user min-h-[auto] w-[280px] shadow-inputShadow px-3 py-[0.32rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus/user:text-primary [&:not([placeholder-active])]:placeholder:opacity-0"
          id="Username"
          placeholder="Username" 
          value={inputUsername}
          onChange={handleInputUsername}/>
        <label
          for="Username"
          class={!showInputUser?
            "pointer-events-none absolute left-3 top-0 mb-0  truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus/user:-translate-y-[0.8rem] peer-focus/user:pt-0  peer-focus/user:scale-[0.8] peer-focus/user:left-0"
            :
            "transition-all absolute left-0 top-0 mb-0 duration-200 ease-out -translate-y-[1.5rem] scale-[0.8] text-neutral-500 "}
          >Username
        </label>
      </div>
      <div className='grid relative'>
        <input 
          type="password"
          class="peer/pass block min-h-[auto] w-[280px] shadow-inputShadow px-3 py-[0.32rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus/pass:text-primary [&:not([placeholder-active])]:placeholder:opacity-0"
          id="password"
          placeholder="Password" 
          value={inputPassword}
          onChange={handleInputPassword}/>
        <label
          for="Password"
          class={!showInputPass?
            "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus/pass:-translate-y-[0.8rem] peer-focus/pass:pt-0  peer-focus/pass:scale-[0.8] peer-focus/pass:left-0"
            :
            "transition-all absolute left-0 top-0 mb-0 duration-200 ease-out -translate-y-[1.5rem] scale-[0.8] text-neutral-500 "}
          >Password
        </label>
      </div>
      <button 
        className='py-3 bg-sky-500 w-[280px] text-white transition-all duration-200 ease-out hover:bg-sky-800'
        onClick={handleLogin}
        >ENTRAR
      </button>
    </div>
  )
}


export default MainLogin;
