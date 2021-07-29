import React, { Component } from 'react'
import Users from './Users';
import UserConsumer from '../Context';
class User extends Component {

    render() {
        return(
        <UserConsumer>
            {
                value =>{
                    const {users} = value;
                    return (
                        <div>
                            {
                                users.map(user => {
                                    return (
                                        <Users
                                            key={user.id}
                                            name={user.name}
                                            pnumber={user.pnumber}
                                            salary={user.salary}
                                            department={user.department}
                                        />
                                    )
                                })
                            }
                        </div>
                    )  
                }
            }
        </UserConsumer>
        )
    }
}


export default User;
