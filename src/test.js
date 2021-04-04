import React from 'react';
import ReactDOM from 'react-dom';
import logo from './unknown1.png';

const Person=({img,name="unknow",score = "----"})=>{
    return(
      <article className="person">
          <img src= {logo} />
          <h4>Name:{name}</h4>
          <h4>Score : {score}</h4>
      </article>
    )
}

class test extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          email: '',
          password: '',
          currentUser: null,
          message: ''
        }
      }

    render(){
        const { message, currentUser } = this.state

        if (currentUser) {
            return (
              <div>
                <p>Hello {currentUser.email}</p>
                <button onClick={this.logout}>Logout</button>
              </div>
            )
          }

        return (
            <div align = 'center'>
                <div className = "person-head">
                <div>himom</div>
                </div>
                <section className="person-list">
                <Person/>
            </section>
            </div>
        )
    }
}

export default test;