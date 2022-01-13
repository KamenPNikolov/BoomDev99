import React from "react"
import {Card,Input,Button,Form} from "./form";


export default function LoginForm(){
    return (
   <Card>    
    <Form>
        <div>
            <label htmlFor="e-mail">E-mail</label>
            <Input name="e-mail"/>
        </div>
        <div>
        <label  htmlFor="password">Password</label>
            <Input name="password"/>
        </div>
      <Button type="submit" >Login</Button>    
    </Form>
    </Card> 
    );


}