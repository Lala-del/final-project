import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/authAction';

const SignUp = () => {
    const state = useSelector((state) => state);
    console.log(state)
    const dispatch = useDispatch()
    const [user, setUser] =useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({ first_name: "",last_name:"", email: "", password: "" });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
               <div>
               
                    <input type="text" placeholder="Name" id="name" value={user.first_name} onChange = {(e) => setUser({...user, first_name: e.target.value})}/>
               </div>
               <div>
                
                    <input type="text" placeholder="Surname" id="surname" value={user.last_name} onChange = {(e) => setUser({...user, last_name: e.target.value})}/>
               </div>
                <div>
                   
                    <input type="email" placeholder="Email" id="email" value={user.email} onChange = {(e) => setUser({...user, email: e.target.value})}/>
                </div>
               <div>
                   
                    <input type="password" placeholder="password" id="password" value={user.password} onChange = {(e) => setUser({...user, password: e.target.value})}/>
               </div>
                <button >Sumbit</button>
            </form>
        </div>
    )
}

export default SignUp;
