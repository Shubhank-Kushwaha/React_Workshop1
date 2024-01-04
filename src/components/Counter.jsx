import React, {Component} from 'react';
class Counter extends Component{
    
    constructor(){
    super();
    this.state={
        countValue: 0,
    };

   
    }
    IncrementCounter()
    {
        console.log("IncrementCounter")
        this.setState(
            {
               countValue: this.state.countValue + 1 
            }
        )
    };
    
    DecrementCounter()
    {
        // console.log()
        if (this.state.countValue >= 0)
        {
            this.intervalId = this.setState(
            {
              countValue: this.state.countValue - 1
            })
        }

    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
         console.log("Mount")
          this.setState({ countValue: this.state.countValue +1})
        }, 1000)

      }
      
      componentWillUnmount()
      {
        
        clearInterval(this.intervalId)
      }
    
  
    render (){
        return ( 
        <>
        <div> Counter{this.state.countValue + 1}</div>
        <button onClick= {this.IncrementCounter.bind(this)}> +</button>
        <button onClick= {this.DecrementCounter.bind(this)}> - </button>
        <button onClick= {this.componentWillUnmount.bind(this)}>Stop Counter</button>
        
         </>
        )
    }
};

export default Counter

