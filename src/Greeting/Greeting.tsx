import React, { ReactComponentElement } from 'react';
import UserModel from '../Models/UserModel';


class Greeting extends React.Component{
    constructor(props:any){
        super(props);
    }
    render(){
        return (<h1></h1>);
    }
}

// const Greeting: React.FC<UserModel> = ({user} : UserModel) => {
//     return (<h1>Welcome! {user.FirstName}</h1>);
// }

export default Greeting;