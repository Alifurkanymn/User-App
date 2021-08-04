import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../Context'
import axios from 'axios'

class Users extends Component {
   state = {
        isVisible : true,
        editUsers : false,
        onSave : true
    } 

    static defaultProps = {
        id: "",
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        pnumber: "Bilgi Yok",
        department: "Bilgi Yok"
    }

    state = { 
        name:"",
        salary: "",
        department: "",
        pnumber: ""
    }

    constructor(props) {
        super(props);

         this.state = {
             isVisible: true
         }

         this.state = { disabled: true }
    }

    

    async componentDidMount () {
     
        
    }
    




    onInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        
        /*const response =  axios.put(`http://localhost:3000/users/${this._reactInternals.key}`).then(function (response) {
            // handle success
            console.log(response.data);

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })*/

        this.setState({
            [e.target.name]: e.target.value
        })
            
    
      }

    

    onEditUsers = (e) => {
        this.setState({
            disabled: !this.state.disabled,
            onSave: !this.state.onSave
        })

        
    }

    onClickEvent= (par,e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser=(dispatch,e)=>{
        console.log(this)
        dispatch({type:"DELETE_USER", payload: this._reactInternals.key })
    }

    render() {

        const {name, salary, pnumber,department} = this.props; 
        const {isVisible} = this.state;
        const {onSave} = this.state;
        return (
            <UserConsumer>
                {
                    value =>{
                        const {dispatch} = value;
                        return (
                            <div className ="Users">
                                <div className ="block UsersB">
                                    <div className ="mainBlock UsersMB">
                                        <h4 className = "name" onClick={this.onClickEvent.bind(this)}   >{name}</h4>
                                        <div className ="iconRow">
                                        {
                                            onSave ? 
                                            <i onClick={this.onEditUsers.bind(this)} className="fas fa-check"></i>
                                            : <i onClick={this.onEditUsers.bind(this)} className="far fa-edit" ></i>
                                        }
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt"></i>     
                                            
                                        </div>
                                        
                                        
                                    </div>
                                    {
                                    isVisible ?
                                    
                                        <div className="bottomBlock UsersBB">
                                            <div className="bottomBlockStyle">
                                                <div className="bottomBlockRow"> 
                                                    <h6>Salary:</h6> 
                                                    <input 
                                                    name ="Salary"
                                                    className={this.state.editUsers ? "bottomBlockActive" : null} 
                                                    defaultValue = {salary} 
                                                    disabled = {(this.state.disabled)? "disabled" : ""}
                                                    onChange={this.onInputChange}/>
                                                </div>
                                                    
                                                <div className="bottomBlockRow"> 
                                                    <h6>Department:</h6> 
                                                    <input 
                                                    name ="Department"
                                                    defaultValue = {department} 
                                                    disabled = {(this.state.disabled)? "disabled" : ""}
                                                    onChange={this.onInputChange}/>
                                                </div>

                                                <div className="bottomBlockRow">
                                                    <h6>Phone Number:</h6> 
                                                    <input 
                                                    name ="Phone Number"
                                                    defaultValue = {pnumber} 
                                                    disabled = {(this.state.disabled)? "disabled" : ""}
                                                    onChange={this.onInputChange}/>
                                                    
                                                </div>
                                            </div>
                                    </div> : null
                                    }
                                    
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
 

Users.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    pnumber : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id: PropTypes.string
}


export default Users;