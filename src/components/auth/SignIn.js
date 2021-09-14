import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { signIn } from '../../store/actions/authAction';

const SignIn = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [creds, setCreds] =useState({
        email:"",
        password:""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds));
        setCreds({  email: "", password: "" });
    }

    // if(auth.id) return <Redirect to="/Home"/>


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                   
                    <input type="email" placeholder="Email" id="email" value={creds.email} onChange = {(e) => setCreds({...creds, email: e.target.value})}/>
                </div>
               <div>
                   
                    <input type="password" placeholder="password" id="password" value={creds.password} onChange = {(e) => setCreds({...creds, password: e.target.value})}/>
               </div>
                <button >Sumbit</button>
            </form>
        </div>
    )
}

export default SignIn;
