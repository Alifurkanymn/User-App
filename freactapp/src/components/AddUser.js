import React, { Component } from 'react';
import posed from 'react-pose';
import UserConsumer from '../Context';

var uniqid = require('uniqid');
const Animation =  posed.div({
        visible: { 
            opacity: 1,
            applyAtStart :{
                display: 'block'
            }
        },
        hidden: { 
            opacity: 0,
            applyAtEnd :{
                display: 'none'
            }
        }
      });
class AddUser extends Component {

    onClickEvent= (par) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    constructor(props) {
        super(props);

         this.state = {
             isVisible: true
         }
    }

    state = { 
        visible: true,
        name:"",
        salary: "",
        department: "",
        pnumber: "",

    }

    ChangeVisibility = (e) =>{
        this.setState({ 
            visible: !this.state.visible
        })
    }


    ChangeInput = (e) =>{
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

   addUser = (dispatch,e) =>{
        e.preventDefault();
        const{name,salary,department,pnumber}= this.state;

        const newUser ={
            id : uniqid(),
            name: name,
            salary : salary,
            department : department,
            pnumber: pnumber,
        }
        dispatch({type : "ADD_USER",payload:newUser});
        this.resetForm()
   }

   resetForm = () => {
    this.setState({
        name: '',
        salary: '',
        department: '',
        pnumber: ''
    })
 }

   

    render() {
        const {visible,name,salary,department,pnumber} = this.state;
        const {isVisible} = this.state;
        
        return <UserConsumer>
            {
                value=>{
                    const {dispatch} = value;
                    return (
                        <div className="AddUsers">
                            <div className="Column">
                             <button onClick={this.ChangeVisibility} className="ShowButton" style={{display:"block", margin:"auto", marginTop:"85px"}}>{visible ? 'Hide Form' : 'Show Form'}</button>
                            <Animation pose ={visible ? "visible" : "hidden"} >
                            <div className = "block">
                                <div className="mainBlock" style={{marginTop:"85px"}}>
                                <h4 className = "name" onClick={this.onClickEvent.bind(this)}>{"Add User"}</h4>
                                </div>
                                {
                                isVisible ? <div className="bottomBlock">
                                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className="formGroup">
                                            <label htmlFor="name">Name :</label>
                                            <input type="text" 
                                            name="name"
                                            id = "name"
                                            className="form-control"
                                            value={name || ""}
                                            onChange = {this.ChangeInput}
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="salary">Salary :</label>
                                            <input type="text" 
                                            name="salary"
                                            id = "salary"
                                            className="form-control"
                                            value={salary || ""}
                                            onChange = {this.ChangeInput}
                                            />
                                        </div>    
            
                                        <div className="formGroup">
                                            <label htmlFor="department">Department :</label>
                                            <input type="text" 
                                            name="department"
                                            id = "department"
                                            className="form-control"
                                            value={department || ""}
                                            onChange = {this.ChangeInput}
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="pnumber">Phone Number :</label>
                                            <input type="text" 
                                            name="pnumber"
                                            id = "pnumber"
                                            className="form-control"
                                            value={pnumber || ""}
                                            onChange = {this.ChangeInput}
                                            />
                                        </div>
                                    <button className="AddButton" type="submit">Add User</button>

                                    </form>

                                </div> : null
                                }
                            </div>
                            </Animation>
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>

    }
}

export default AddUser;
