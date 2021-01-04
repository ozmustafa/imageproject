import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ListImages from './ListImages/listImages';
import "./app.css";
import axios from 'axios';


class App extends Component{
  state = {
    img:[]
  }
  onSearchImg = async(search) => {
    console.log('image: '+ search);
    const result = await axios.get('https://api.unsplash.com/search/photos',{
     params:{
       query: search
     },
     headers:{
       Authorization: 'Client-ID PerxEt_AFzTdOn8NHFP9IKOUcKa8PSxQLzfN_sUsrxc'
     }, 
    });
    this.setState({
      img:result.data.results
    });

  }
  render(){
  return(
    <div className="appContainer">
      <SearchBar onSearchImg={this.onSearchImg} />
      <ListImages images={this.state.img} />
    </div>
  )
}
}
export default App;
