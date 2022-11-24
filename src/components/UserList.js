import axios from "axios";
import React, { useEffect, useState } from "react";
import CardUser from "./Card";

const UserList =()=> {
    
    
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((error)=>console.log(error))
    },[])
    console.log(users)
    return (
        <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
            {users.map((user) => <CardUser id={user.id} user={user}/>)}
            
        </div>
    )

}
export default UserList