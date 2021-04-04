import React from 'react'
import auth from './base'

class Login extends React.Component {

    logout = e => {
        e.preventDefault()
        auth.signOut().then(response => {
          this.setState({
            currentUser: null
          })
        })
      }
      
    constructor(props) {
        super(props)
    
        this.state = {
          email: '',
          password: '',
          currentUser: null,
          message: ''
        }
      }

      backOnClick = e => {
        this.props.history.push('/')
      }
    
      onChange = e => {
        const { name, value } = e.target
    
        this.setState({
          [name]: value
        })
      }
    
      onSubmit = e => {
        e.preventDefault()
    
        const { email, password } = this.state
        auth
        .signInWithEmailAndPassword(email, password)
        .then(response => {
            this.setState({
            currentUser: response.user
            })
        })
        .catch(error => {
            this.setState({
            message: error.message
            })
        })
      }
    
      render() {
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
            <>
          <section className="person-list" align = "center">
            <div className="columns is-centered">
              <div className="column is-half">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <div className = "person5-head">
                      <div>ลงชื่อเข้าใช้งาน</div>
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
                    {message ? <p className="help is-danger">{message}</p> : null}
                  <div className="field is-grouped">
                    <div className="control">
                      <button class="button_cont" align="center"><a class="example_e">ยืนยัน</a></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <h2>มีบัญชีแล้วหรือยัง?</h2>
            <div class="button_cont" align="center"><a class="example_e" href="signup">ลงทะเบียน</a></div>
            <div class="button_cont" onClick = {this.backOnClick} align="center"><a class="example_e">ยกเลิก</a></div>
          </section>

          </>
        )
      }
    }    

export default Login;