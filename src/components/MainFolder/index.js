import React from 'react'
import folderImage from '../../assets/wallpaperflare.com_wallpaper.jpg';

const MainFolder = () => {
  return (
    <div class="relative">
        <img src={folderImage} alt="" class="w-full h-[25rem] object-cover md:object-bottom opacity-80 object-right"/>
        <div class="absolute md:left-12 top-24 left-4">
          <h2 class="font-bold text-white captilize lg:text-3xl md:text-2xl text-sm">APROVEITE A PROMOÇÃO DE NOVEMBRO</h2>
          <p class="text-white md:text-xl text-sm ">Preços imperdiveis pro mês que nós adoramos</p>
        </div>
      </div>
  )
}

export default MainFolder;
