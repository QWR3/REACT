import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../user/User";

export default function Users({url}) {
    let [users, setUsers] = useState([])
    useEffect(()=>{getUsers.then(value => setUsers([...value.data]))},[])
    return (
        <div>
            {users.map((value, index) => <User key={index} item={value} url={url}/> )}
        </div>
    );
}