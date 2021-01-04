import React, { Component } from 'react'

class Image extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state={
            spanCount:1
        }
    }
    componentDidMount(){
        this.myRef.current.addEventListener('load',()=>{
            console.log(this.myRef.current.clientHeight);
            const sCount=Math.round(this.myRef.current.clientHeight/5)+1;
            this.setState({
                spanCount:sCount
            });
        });
    }
    render() {
        const{img}=this.props;
        return (
            <img style={{
                gridRowEnd:`span ${this.state.spanCount}`
            }} key={img.id} src={img.urls.thumb} alt="" ref={this.myRef} />
        )
    }
}

export default Image;