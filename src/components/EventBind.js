import React, { Component } from 'react'

class EventBind extends Component {

    
        constructor(props) {
          super(props)
        
          this.state = {
              message: 'hello'
          }
        }
        changeHandle(){
            this.setState({
                message: 'welcome home'
            })
        }
   
        render() {

        return (
            <div>
                <div>{this.state.message}</div>
               <button onClick ={this.changeHandle.bind(this)}>Click</button> 
            </div>
        )
    }
}

export default EventBind
