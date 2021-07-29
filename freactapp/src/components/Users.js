import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../Context'
class Users extends Component {
   state = {
        isVisible : true
    } 

    static defaultProps = {
        id: "",
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        pnumber: "Bilgi Yok",
        department: "Bilgi Yok"
    }

    constructor(props) {
        super(props);

         this.state = {
             isVisible: true
         }
    }

    textEdit=() => {
        this.setState({isVisible: !this.state.isVisible})
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
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt"></i>
                                    </div>
                                    {
                                    isVisible ? this.stateisVisible ? <input type="text" value={this.state.value} /> :<div className="bottomBlock UsersBB">
                
                                        <h6 className="salary" onClick = {this.textEdit.bind(this)}> Salary: {salary}</h6>
                                        <h6 className="department" onClick = {this.textEdit.bind(this)}> Department: {department}</h6>
                                        <h6 className="pname" onClick = {this.textEdit.bind(this)}> Phone Number: {pnumber}</h6>
                                        
                                        
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
