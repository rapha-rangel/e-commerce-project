import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import CardProducts from '../CardProducts';
import { useNavigate } from 'react-router-dom';
import MainFolder from '../MainFolder';

const MainAllProduct = (props) => {
  const [produtcsList, setProductsList] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const getProduct = async(category)=>{
      const {data} = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProductsList(data);
    }
    getProduct(props.categories);
  },[])

  return (
    <div class="bg-gray-200">
      <MainFolder/>
      <div class="bg-gray-200 xl:py-16 xl:px-[10%] w-full lg:pt-16 lg:px-[15%] md:px-8 grid py-4 px-4">
        <div>
          <h2 class="text-3xl font-bold pb-4">
            <button 
              class="hover:text-blue-700"
              onClick={()=>navigate("/main")}>Todos os produtos</button> 
              - 
            <span class="capitalize">{props.categories}</span></h2>
        </div>
        <div class="grid exsm:grid-cols-2 sm:grid-cols-3 esmd:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6">
          {produtcsList && produtcsList.map((category)=>(
            <CardProducts
              width={"full"}
              data={category}/>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps=(state)=>({
  categories: state.list.choiseCategory,
});

export default connect(mapStateToProps)(MainAllProduct);
