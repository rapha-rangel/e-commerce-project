import { IconContext } from 'react-icons';
import { FaRegTrashCan } from 'react-icons/fa6';
import { toFixedNum } from '../../utils';
import { useDispatch } from 'react-redux';
import { setIncreseOrDecreseQuantity, setDeleteCartUser } from '../../redux/reducers/list';
import { useEffect } from 'react';

const CartCard = (props) => {
  useEffect(()=>{

  },[props]);
  const dispatch = useDispatch();

  const increseProduct = (product, quantProd, index)=>{
    if(quantProd <=10){
      const param =[[product, {quantity:quantProd+1}],index];
      dispatch(setIncreseOrDecreseQuantity(param));
    }
  }

  const decreseProduct = (product, quantProd, index)=>{
    if(quantProd >1 ){
      const param =[[product, {quantity:quantProd-1}],index];
      dispatch(setIncreseOrDecreseQuantity(param));
    }
  }

  const deleteProduct = (index)=>{
    console.log(index)
    dispatch(setDeleteCartUser(index));
  }

  return (
    <div class="flex h-[8rem] mb-4 transition-all ease-linear duration-300 ">
      <div class="px-4 bg-blue-500 rounded-l-2xl shadow-xl"></div>
      <div class="flex border-2 border-blue-200 w-full border-l-0 px-2 py-4 rounded-r-2xl shadow-xl">
        <img src={props.product.image} alt={props.product.title} class="w-28 h-24 mr-4"/>
        <div class="grid w-full">
          <h4 class="text-sm truncate">{props.product.title}</h4>
          <h4 class="text-sm font-bold"><span>R$</span>{toFixedNum(props.product.price)}</h4>
          <div class="flex items-center">
            <h4 class="text-sm truncate">Quantidade:</h4>
            <div class="ml-4">
              <span
                onClick={()=>decreseProduct(props.product, props.quantity.quantity, props.index)}
                class="px-3 py-1 border-r-0 border-2 border-blue-200 font-semibold rounded-l-lg hover:text-white hover:bg-sky-500">-</span>
              <span class="px-3 py-1 border-2 border-blue-200">{props.quantity.quantity}</span>
              <span
                onClick={()=>increseProduct(props.product, props.quantity.quantity, props.index)}
                class="px-3 py-1 border-l-0 border-2 border-blue-200 font-semibold rounded-r-lg hover:text-white hover:bg-sky-500">+</span>
            </div>
          </div>
          <div class="flex justify-end mr-4">
            <IconContext.Provider value={{ size: "1.5em" }} >
              <div
                onClick={()=>deleteProduct(props.index)}
                class="text-blue-300 hover:text-red-700">
                <FaRegTrashCan  />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard;
