import React, { useState } from 'react'
import logo from "../../assets/logo.avif"

const Question = () => {
  const [namelQuestion, setNameQuestion] = useState("");
  const [messageQuestion, setMessageQuestion] = useState("");

  const handleName = (e)=>{
    setNameQuestion(e.target.value)
  }

  const handleMessage = (e)=>{
    setMessageQuestion(e.target.value)
  }

  return (
    <div class='md:flex bg-sky-200 py-16 xl:px-[10%] w-full lg:py-12 lg:px-[15%] md:px-8 grid py-4 px-4'>
      <div className='lg:flex xl:w-6/12 md:w-6/12 w-full grid justify-items-center'>
        <div class='lg:w-4/12 lg:mr-4 md:mb-4 pb-4'>
          <img src={logo} alt="Logo" class='lg:w-32 lg:h-32 p-2 bg-white rounded-full md:w-24 md:h-24 w-48 h-48'/>
        </div>
        <div class='lg:w-8/12 lg:gap-y-0 grid content-between md:w-full md:gap-y-2 lg:justify-items-start justify-items-center gap-y-3 mb-8'>
          <a href="" class="xl:text-lg lg:text-sm text-lg font-semibold">Quem nós somos</a>
          <a href="" class="xl:text-lg lg:text-sm text-lg font-semibold">Politicas de privacidade</a>
          <a href="" class="xl:text-lg lg:text-sm text-lg font-semibold">Programa fidelidade</a>
          <a href="" class="xl:text-lg lg:text-sm text-lg font-semibold">Nossas lojas</a>
          <a href="" class="xl:text-lg lg:text-sm text-lg font-semibold">Quer ser franqueado</a>
          <a href="" class="xl:text-lg lg:text-sm text-lg font-semibold">Anuncie aqui</a>
        </div>
      </div>
      <div class='lg:w-6/12 grid gap-y-2 md:w-8/12'>
        <h2 class='text-xl font-bold'>Fale Conosco</h2>
        <div class='grid relative'>
          <input 
            type="text"
            class="w-full shadow-inputShadow px-3 pt-[1.2rem] pb-[0.8rem] outline-none"
            id="UserName"
            onChange={handleName}
            />
          <label
            for="UserEmail"
            class={"absolute left-1 top-0 mb-0  scale-[0.8] text-neutral-500"}
            >Nome
          </label>
        </div>
        <div className='grid relative'>
          <textarea
            cols="4"
            rows="3"
            type="text"
            class="w-full shadow-inputShadow px-3 pt-[1.2rem] pb-[0.8rem] outline-none"
            id="UserMessage"
            onChange={handleMessage}
            >
            </textarea>
          <label
            for="UserMessage"
            class={"absolute -left-2 top-0 scale-[0.8] text-neutral-500"}
            >Escreva sua Mensagem
          </label>
        </div>
        <button class="flex justify-center items-center w-2/6 lg:w-3/6 px-4 py-2 bg-blue-800 md:w-3/6 md:px-3 md:py-1.5 max-[425px]:w-full">
          <span class="text-white ">Enviar Mensagem</span>
        </button>
      </div>
    </div>
  )
}

export default Question;
