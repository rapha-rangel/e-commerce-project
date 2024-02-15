import { useEffect} from 'react';
import ListProducts from '../ListProducts';
import { fetchAllCategories } from '../../redux/reducers/list';
import { connect} from 'react-redux';
import MainFolder from '../MainFolder';


const MainUser = (props) => {
  
  useEffect(()=>{
    props.fetchAllCategories();
  },[])

  return (
    <div class="bg-gray-200">
      <MainFolder/>
      {props.allCategories && props.allCategories.map((category) =>(
        <ListProducts
          produto={category}
          titleName={category}/>
      ))}
    </div>
  )
}
const mapStateToProps =(state) =>({
  allCategories: state.list.allCategories,
})

const mapDispatchToProps = {
  fetchAllCategories,
};

export default connect(mapStateToProps,mapDispatchToProps)(MainUser);
