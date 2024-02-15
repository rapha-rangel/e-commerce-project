import Header from '../../components/Header';
import Question from '../../components/Question';
import MainUser from '../../components/MainUser';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCategories } from '../../redux/reducers/list';

const Main = (props) => {
  useEffect(()=>{
    console.log("Atualizou")
  },[props.allCategories])
  return (
    <div>
      <Header/>
      <MainUser/>
      <Question/>
    </div>
  )
}

const mapStateToProps =(state)=>({
  allCategories:state.list.allCategories,
})

const mapDispatchToProps ={
  fetchAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
