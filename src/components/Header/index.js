import { useState } from 'react'
import logo from "../../assets/logo.avif"; 
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import { RiShoppingCart2Fill } from "react-icons/ri"
import { connect } from 'react-redux';

const Header = (props) => {
  const [iconSearch ,setIconSearch] =useState(true);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleResetInput = ()=>{
    setInputValue("");
    setIconSearch(true);
  }

  const handleChange=(e)=>{
    setInputValue(e.target.value)
    if(e.target.value.length > 0) {
      setIconSearch(false);
    } else{
      setIconSearch(true);
    }
  }

  const handleToMain = ()=>{
    window.scrollTo(0, 0);
    navigate('/main');
  }

  const handleCartPage =()=>{
    window.scrollTo(0, 0);
    navigate('/user');
  }

  return (
    <div className='flex justify-between items-center my-4 xl:mx-[10%] lg:mx-[15%] sm:mx-8 mx-0 mr-4'>
      <div className='flex items-center '>
        <img className='w-24 h-24 xl:mr-8 mr-0' src={logo} alt="logo"
          onClick={handleToMain}/>
        <div className='flex relative esmd:inline hidden'>
          <input type="search"
            class='peer/input lg:w-96 md:w-72 h-12 p-6 rounded-full bg-gray-200 outline-none w-5/5'
            value={inputValue}
            onChange={handleChange}/>
            <label class={iconSearch?
                        "pointer-events-none absolute top-3 left-6 truncate transition-all duration-300 ease-out text-gray-500 opacity-100 peer-focus/input:opacity-0 md:text-sm md:top-4"
                        :
                        "absolute top-3 left-6 truncate transition-all duration-300 ease-out text-gray-500 opacity-0"}
              >Busque seu Produto Aqui...
            </label>
          <div className='absolute top-0 right-5 py-4'>
            {iconSearch?
              <IconContext.Provider value={{ size: "1.2em", }}>
                <div>
                  <FaSearch />
                </div>
              </IconContext.Provider>
            :
              <IconContext.Provider value={{ size: "1.2em", }}>
                <div onClick={handleResetInput} className=''>
                  <IoMdClose />
                </div>
              </IconContext.Provider>
            }
          </div>
        </div>
      </div>
      <div>
        <button 
          className={props.isLogin?
            'animate-[fadeOut_1.5s_ease-in-out_forwards] mr-4 border-2 border-blue-300 px-16 py-3 hover:bg-sky-400 hover:text-white'
            :
            'mr-4 border-2 border-blue-300 px-16 py-3 hover:bg-sky-400 hover:text-white'}>
            Login
        </button>
        <div class={!props.isLogin?
          'hidden'
          :
          "relative  animate-[fadeIn_3s_ease-in_forwards]"}
        >
          <button
            onClick={handleCartPage}
            className='peer/car mr-4 transition-all py-3 duration-200 ease-out hover:text-sky-400'>
            <IconContext.Provider value={{ size: "1.6em" }}>
              <div>
                <RiShoppingCart2Fill />
              </div>
            </IconContext.Provider>
          </button>
          <div class="absolute transition-all duration-200 ease-out -top-3 right-2 px-[0.5rem] rounded-full bg-sky-200 peer-hover/car:bg-red-600"> 
            <span class="text-sm text-white font-bold">{props.cartUser.length}</span>
          </div>
        </div>
      </div>
          
      <button class="esmd:hidden sm:mr-3 block">
        <IconContext.Provider value={{ size: "1.6em", }}>
          <div>
            <FaSearch />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  )
}

const mapStateToProps = (state)=>({
  isLogin: state.list.isLogin,
  cartUser : state.list.cartUser,
})

export default connect(mapStateToProps)(Header);
