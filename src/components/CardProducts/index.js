import { useDispatch, connect } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { setChoiseProduct } from '../../redux/reducers/list';
import { toFixedNum } from '../../utils';

const CardProducts = (props) => {
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const handleProduct =(product)=>{
    window.scrollTo(0, 0);
    dispatch(setChoiseProduct(product));
    navigate(`/category/${product.category}/id/${product.id}`)
  }

  return (
    <div className={props.width ? 'grid w-6/6 pb-8 m-2' 
                :'grid md:w-1/6 w-3/6'}>
    <img src={props.data.image} alt={props.data.title} 
      class="w-full lg:h-36 md:h-24 h-28 mb-3 p-6 bg-white"/>
    <p class="truncate text-sm">{props.data.title}</p>
    <p class="font-semibold text-xl"><span>R$</span>{toFixedNum(props.data.price)}</p>
    <button className='flex justify-items-start'>
      <span class="text-blue-400 font-semibold hover:text-blue-700 cursor-pointer" onClick={()=>handleProduct(props.data)}>
        Ver produto
      </span>
    </button>
    
  </div>
    
  )
}

const mapStateToProps=(state)=>({
  loading: state.list.loading
})

export default connect(mapStateToProps)(CardProducts);
