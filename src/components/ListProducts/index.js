import React, { useEffect, useState} from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import CardProducts from '../CardProducts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setChoiseCategory } from '../../redux/reducers/list';

const ListProducts = ({produto, titleName, productId}) => {
  const [limitPerPage, setLimitPerPage] = useState("");
  const [limitedList, setLimitedList] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const getLimits = async (name, limit)=>{
      const {data} = await axios.get(`https://fakestoreapi.com/products/category/${name}?limit=${limit}`)
      const filterList = data.filter((data)=>data.id !== productId)
      setLimitedList(filterList)
    }
    getLimits(produto, limitPerPage);
    const windowSizeHandler = () => {
      console.log(window.innerWidth)
      if(window.innerWidth >= 1439){
        setLimitPerPage(7)
      } else 
      if(window.innerWidth >= 768){
        setLimitPerPage(6)
      } else
      if(window.innerWidth >= 550){
        setLimitPerPage(4)
      } else{
        setLimitPerPage(2)
      }
    }
    windowSizeHandler();
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  },[limitPerPage, productId])

  const handleNavigate =()=>{
    window.scrollTo(0, 0);
    dispatch(setChoiseCategory(produto))
    navigate(`/category/${produto}`)
  }

  return (
    <div class="xl:mx-[10%] lg:mx-[15%] sm:mx-8 mx-2 pt-12 " >
      <div class="flex justify-between mb-4">
        <h4 class="text-3xl font-bold uppercase">{titleName}</h4>
        <button className=" group/btn flex items-center " 
          onClick={handleNavigate}>
          <span class=" font-semibold text-blue-400 mr-2 group-hover/btn:text-blue-700">Ver tudo</span>
          <IconContext.Provider value={{ size: "1em" }} >
            <div class="text-blue-400 group-hover/btn:text-blue-700">
              <FaArrowRight />
            </div>
          </IconContext.Provider>
        </button>
      </div>
      <div class="flex pb-8 gap-x-2">
        {limitedList && limitedList
        .map((onlyCategoty)=>
          <CardProducts
            data={onlyCategoty}/>
        )}
      </div>
    </div>
  )
}

export default ListProducts;
