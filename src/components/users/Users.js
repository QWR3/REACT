import User from "../user/User";
import {useEffect, useState} from "react";

export default function Users() {
    let [userArr, setUserArr] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserArr(data);
            });
    }, []);
    console.log(userArr)
    return (
        <div>
            <p>Hi from Users</p>
            {userArr.map(user => <div>{user.name}</div>)}
            {/*<User users={userArr}/>*/}
        </div>
    );

}