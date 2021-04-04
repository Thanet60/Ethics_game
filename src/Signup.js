import React from 'react'
import auth from './base'
import { withRouter, Redirect } from "react-router";

class Login extends React.Component {
      
    constructor(props) {
        super(props)
    
        this.state = {
          email: '',
          password: '',
          currentUser: null,
          message: ''
        }
      }
    
      onChange = e => {
        const { name, value } = e.target
    
        this.setState({
          [name]: value
        })
      }

      backOnClick = e => {
        this.props.history.push('/')
      }
    
    
      onSubmit = e => {
        e.preventDefault()
    
        const { email, password } = this.state
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
            this.setState({
            currentUser: response.user
            })
            this.props.history.push('/Login')
        })
        .catch(error => {
            this.setState({
            message: error.message
            })
        })
      }
    
      render() {

        return (
          <section className="person-list" align = "center">
            <div className="columns is-centered">
              <div className="column is-half">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                  <div className = "person5-head">
                      <div>ลงทะเบียน</div>
                    </div>
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
    
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                    <button class="button_cont" align="center"><a class="example_e">ยืนยัน</a></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="button_cont" onClick = {this.backOnClick} align="center"><a class="example_e">ยกเลิก</a></div>
          </section>
        )
      }
    }    

export default Login;