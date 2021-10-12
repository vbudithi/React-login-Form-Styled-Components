import React, { useContext } from "react";
import useForm from './useForm'
import validate from '../validate/validateInfo' 

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const {handleChange, values, handleSubmit, errors } = useForm(validate);
 
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
    
        <Input
          id ="username"
          type="text"
          name="username"
          autoCorrect="off"
          autoComplete="name"
          placeholder="Enter your full name"
          value={values.username}
          onChange={handleChange}
          
        />
        
        {errors.username && <p>{errors.username}</p>}    

         <br />
        <Input 
          id = "email" 
          type="email" 
          name="email" 
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />    
         {errors.email && <p>{errors.email}</p>}
         <br />
        <Input 
          id = "password"     
          type="password" 
          name="password" 
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange} 
        />
        {errors.password && <p>{errors.password}</p>}
           <br />
        <Input
          id = "password2" 
          type="password" 
          name="password2" 
          placeholder="Confirm Password" 
          value={values.password2}
          onChange={handleChange} 
        />
        {errors.password2 && <p>{errors.password2}</p>}
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
        <br />
        <br />
        <br />
      </MutedLink>
    </BoxContainer>
  );
}

