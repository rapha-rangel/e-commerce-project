import axios from 'axios';
import React, { useState } from 'react';
import { IMaskInput } from "react-imask";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { setCepUser } from '../../redux/reducers/list';
import { useDispatch } from 'react-redux';
import { calcShipping } from '../../utils';

const SearchCep = () => {
  const [cepValue, setCepValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [haveCep, setHaveCep] = useState(false);
  const [wrongCep, setWrongCep] = useState(false);
  const dispatch = useDispatch();

  const handleCepNumber = (e)=>{
    const num = e.target.value;
    setInputValue(num.replace("-",""));
    if(inputValue.length < 9){
      setWrongCep(false)
    }
  }
  
  const handleGetCep = async ()=>{
    try{
      const response = await axios.get(`https://opencep.com/v1/${inputValue}`);
      if(response.status === 200){
        setCepValue(response.data);
        setHaveCep(true);
        dispatch(setCepUser(response.data.uf));
        console.log(response.data.uf)
      }else{
      }
    } 
    catch(err){
      console.log(err)
      setWrongCep(true)
      console.log(haveCep)
    }
  }

  const handleGetBackCep = async ()=>{
    setInputValue("");
    setHaveCep(false);
    dispatch(setCepUser(""));
  }

  return (
    <>
    {!haveCep?
      <div class="border-2 border-sky-200 px-2 py-4 flex gap-x-3 rounded-lg mt-10">
        <div>
          <p class="text-sm text-blue-700 font-semibold">Calcule a entrega</p>
          <p class="text-xs font-semibold text-gray-400"> Estimativa para sua região</p>
        </div>
        <div>
          <IMaskInput 
            onChange={handleCepNumber}
            mask="00000-000"
            class={wrongCep ? "p-2 outline-none rounded-md w-[7rem] text-lg outline-2 outline-red-600"
              :"p-2 outline-none rounded-md w-[7rem] text-lg"}
            type="text" placeholder='00000-000' maxlength="9"/>
        </div>
        <div>
          <button class="p-2 bg-blue-800 rounded-lg focus:ring focus:ring-blue-500">
            <span
              onClick={handleGetCep}
              class="text-white font-semibold text-lg">Calcular</span>
          </button>
        </div>
      </div>
    :
      <div class="border-2 border-sky-200 px-2 py-4 gap-x-3 rounded-lg mt-10 ">
        <h3 class="text-lg text-sky-600 font-bold">Sim, entregamos para sua região!</h3>
        <p class="text-sm font-light border-b-2 border-gray-400 pb-2">Entrega Calculada para:</p> 
        <div class="flex py-3 justify-between pr-3">
          <div class="flex gap-x-2 ">
            <IconContext.Provider value={{ size: "2em", color:"blue" }}>
              <div>
                <IoLocationSharp />
              </div>
            </IconContext.Provider>
            <div class="grid">
              <p><span>CEP:</span>&ensp;{cepValue.cep}</p>
              <p>{cepValue.logradouro}</p>
              <p>{cepValue.complemento ? cepValue.complemento: "" }</p>
              <p>{cepValue.bairro}</p>
              <p>{cepValue.localidade}<span>-</span>{cepValue.uf}</p>
            </div>
          </div>
          <div>
            <p class="uppercase text-green-600 text-lg font-bold">{calcShipping(cepValue.uf)==="Gratis"?calcShipping(cepValue.uf):null}
</p>
          </div>
        </div>
        <div class="grid items-center border-t-2 border-gray-400 pt-2">
          <button onClick={handleGetBackCep}>
            <span class="text-xs text-blue-600 underline hover:text-blue-800 ">Digitar um novo CEP</span>
          </button>
        </div>
      </div>
    }
    </>
  )
}

export default SearchCep;
