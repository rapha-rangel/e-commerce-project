import { connect, useDispatch } from 'react-redux';
import { setCartUser, setIncreseOrDecreseQuantity } from '../../redux/reducers/list';
import ListProducts from '../ListProducts';
import { useNavigate } from 'react-router-dom';


const MainProduct = (props) => {
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const handleCarUser = (id)=>{
    const filter = props.cartUser.filter(prod=> prod[0].id === id);
    if(props.product.length === 0){
      dispatch(setCartUser([props.product, {quantity:1}]));
    } else if(filter.length ===0){
      dispatch(setCartUser([props.product, {quantity:1}]));
    } else {
      const numQuantity= filter.map(f=>f[1].quantity);
      const posArray = props.cartUser.indexOf(filter[0]);
      const param =[[props.product, {quantity:parseInt(numQuantity[0])+1}],posArray];
      dispatch(setIncreseOrDecreseQuantity(param));
    }
    navigate("/user");
  }

  return (
    <div class=" bg-gray-200" >
      <div class="md:flex items-center xl:px-[10%] lg:px-[15%] sm:px-8 px-2 pt-12 mb-8 esmd:grid">
          <img src={props.product.image} alt={props.product.title} 
            class="xl:w-[30rem] xl:h-[25rem] lg:w-[25rem] lg:h-[20rem] md:w-[22rem] md:h-[17rem] esmd:w-[100%] esmd:h-[100%] pb-4 md:mr-4"/>
        <div class="grid gap-y-2">
          <h1 class="font-bold xl:text-3xl lg:text-2xl md:text-xl text-2xl">{props.product.title}</h1>
          <h3 class="font-bold text-xl">R${props.product.price}</h3>
          <button
            onClick={()=>handleCarUser(props.product.id)}
            class='flex justify-center mr-4 border-2 border-blue-300 px-16 py-3 hover:bg-sky-400 hover:text-white w-2/6 focus:ring focus:ring-blue-600'>
            <span>Comprar</span>
          </button>
          <p class="font-extralight md:text-sm text-gray-800 exsm:text-xs">{props.product.description}</p>
        </div>
      </div>
      <div>
        <ListProducts
          produto={props.product.category}
          titleName={"Podutos similares"}
          productId={props.product.id}/>
      </div>
    </div>
  )
}

const mapStateToProps =(state)=>({
  product: state.list.choiseProduct,
  cartUser: state.list.cartUser,
});

export default connect(mapStateToProps)(MainProduct);
