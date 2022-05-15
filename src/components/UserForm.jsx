import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    console.log("Welcome", newUser);
    };
    const firstNameValidation = () => {
        if( firstName.length >= 2 ) {
            return "";}
        else {
            return "First Name must be at least 2 characters";
        }
    };
    const lastNameValidation = () => {
        if( lastName.length >= 2 ) {
            return "";}
        else {
            return "Last Name must be at least 2 characters";
        }
    };
    const emailValidation = () => {
        if( email.length >= 2 ) {
            return "";}
        else {
            return "Email must be at least 2 characters";
        }
    };
    const passwordValidation = () => {
        if( password.length >= 8 ) {
            return "";}
        else {
            return "First Name must be at least 8 characters";
        }
    };
    const confirmPasswordValidation = () => {
        if( password != confirmPassword ) {
            return "Passwords must match!";}
        else {
            return "";
        }
    };

    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <p>{firstNameValidation()}</p>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <p>{lastNameValidation()}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <p>{emailValidation()}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <p>{passwordValidation()}</p>
            </div>
            <div>
                <p>{confirmPasswordValidation()}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
        </>
    );
};
    
export default UserForm;
