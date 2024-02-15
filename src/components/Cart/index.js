import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import CartCard from '../CartCard';
import SearchCep from '../SeachCep';
import { calcShipping, toFixedNum } from '../../utils';
import { setDeleteCartUser } from '../../redux/reducers/list';
const Cart = (props) => {
  const [totalValue, setTotalValue]= useState(0);
  const [totalValueWithShip, setTotalValueWithShip]= useState(0);
  const dispatch = useDispatch();

  useEffect(()=>{
    const totalCart = ()=>{
      const soma = props.cartUser.map((camp)=>camp[0].price*camp[1].quantity).reduce((acc,current)=> acc + current,0);
      setTotalValueWithShip(soma+ (calcShipping(props.cepUser) === "Gratis"? 0 : calcShipping(props.cepUser)))
      setTotalValue(soma);
    }
    totalCart();
    console.log("rend")
  },[props])


  return (
    <div class="bg-gray-200">
      <div class="bg-gray-200 xl:py-16 xl:px-[10%] w-full lg:pt-16 lg:px-[15%] md:px-8 grid py-4 px-4">
        <h2 class="text-3xl font-bold mb-2">Carrinho</h2>
        <div class="flex gap-x-8">
          <div class="w-7/12">
            {props.cartUser.length > 0 ? 
              props.cartUser && props.cartUser.map((product,key)=>
                <CartCard
                  index={key}
                  product={product[0]}
                  quantity={product[1]}
                  />)
              :
              <div class="w-7/12">
                <h2 class="pt-8 text-lg">Seu Carrinho esta vazio</h2>
              </div>
            }
          </div>
          <div class="w-5/12">
            <h2 class="text-2xl font-bold border-b-2 border-gray-300 pb-3">Resumo da compra</h2>
            <div class="grid gap-y-2">
              <div class="flex mt-4">
                <h4 class="text-lg font-semibold">Valor dos produtos:</h4>
                <p class="text-lg font-semibold"><span>&ensp;R$</span>{toFixedNum(totalValue)}</p>
              </div>
              <div class="flex">
                <h4 class=" text-lg font-semibold">Desconto:</h4>
                <p class="text-lg font-semibold"><span>&ensp;R$</span>{toFixedNum(0)}</p>
              </div>
              <div class="flex border-b-2 border-gray-300 pb-3">
                <h4 class=" text-lg font-semibold ">Frete:</h4>
                <p class="text-lg font-semibold">
                  {calcShipping(props.cepUser) === "Gratis"?
                    <><span>&ensp;R$</span>{toFixedNum(0)}</>
                    :
                    <><span>&ensp;R$</span>{toFixedNum(calcShipping(props.cepUser))}</>
                  }
                </p>
              </div>
              <div class="flex">
                <h4 class="text-lg font-bold uppercase">Valor final:</h4>
                <p class="text-lg font-bold"><span>&ensp;R$</span>{toFixedNum(totalValueWithShip)}</p>
              </div>
            </div>
            <SearchCep/>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps=(state)=>({
  cartUser: state.list.cartUser,
  quantity: state.list.quantityProduct,
  cepUser:  state.list.cepUser,
})

export default connect(mapStateToProps)(Cart);
