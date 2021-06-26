import './Users.css';
import User from "../user/User";

export default function Users({item: users, fn}) {
    return (
        <div className={'users'}>
            <p>Hi from Users</p>
            {users && users.map(user => <User key={user.id} item={[user.id, user.name, user.email]} fn={fn}/>)}


        </div>
    );

}