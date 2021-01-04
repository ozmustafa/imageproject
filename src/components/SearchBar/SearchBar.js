import React, { Component } from 'react';
import "./SearchBar.css";

class SearchBar extends Component {
    state = {
        search:''
    };
    searchTerm = (event) => {
        
        this.setState({
            search:event.target.value
        });
    }

    searchImage = () => {
        
        this.props.onSearchImg(this.state.search);
    }

    render(){
    return (       
        <div className="sbContainer ui input">
            <input type="text" onChange={this.searchTerm} onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    this.searchImage();
                }
            }} placeholder="Search..." />
            <button className="ui icon button" onClick={this.searchImage}>
              <i className="search icon"></i>
            </button>
        </div>        
    )
}
}

export default SearchBar;