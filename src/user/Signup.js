import React, {useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {signup} from "../auth/helper";


const Signup = () =>{

    const [values , setValues] = useState({
        name: "",
        email:"",
        password:"",
        error:"",
        success: false

    });

    const{ name ,email, password, error, success} = values;

    const handleChange = name => event =>{
        setValues({...values, error: false, [name]: event.target.value});
    };

    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values, error: false});
        signup({name , email , password})
        .then(data => {
            if(data?.error){
                setValues({...values, error: data.error , success: false})
            }else{
                setValues({
                    ...values,
                    name:"",
                    email: "",
                    error: "",
                success: true              });
            }
        })
        .catch(console.log("errror in Signup"));
    }

    const SignUpForm = ()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" 
                            onChange={handleChange("name")} 
                            type ="text"/>

                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" 
                            onChange={handleChange("email")} 
                            type ="password"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control"
                            onChange={handleChange("password")} 
                             type ="password"/>

                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                      
                    </form>
                </div>

            </div>

        )
    }

    const successMessage = ()=>{
        return(<div className="alert alert-success"
        style={{display: success ? "" : "none"}}>
        New account was created succesfully, Please <Link to="/signin">Login</Link>
        </div>
        )
    }

    const errorMessage = ()=>{
        return (<div className="alert alert-danger"
        style={{display: error ? "" : "none"}}>
            {error}
       </div>)
    }
    return(
        <Base title = "Sign up Page" description="User can SignUp!!">
            {successMessage()}
            {errorMessage()}
        {SignUpForm()}
    <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signup;