import React, { ReactComponentElement } from 'react';
import UserModel from '../Models/UserModel';

const Greeting = ({user} : {user: UserModel}) => {
    return (<h1 id='greeting' style={{marginLeft : "auto", marginRight: "auto"}}>Welcome! {user.FirstName}</h1>);
}

export default Greeting;