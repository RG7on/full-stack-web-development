import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useSelector,useDispatch} from "react-redux"
import { useState } from "react";
import { addUser } from "../Features/UserSlice";

const Register = () => {
 const userList = useSelector((state)=> state.users)
 const [name, setname] = useState("");
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");
 const [confirmPassword, setconfirmPassword] = useState("");

 const dispatch = useDispatch()

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });


    // Handle form submission
    const onSubmit = (data) => {
      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good.")
      dispatch(addUser({name:data.name,email:data.email,password:data.password}))
    }
  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
          {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
          <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="appTitle">
            </div>
            <section className="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={(e)=>setname(e.target.value)}
                  placeholder="Enter your name..."
                  {...register("name")} 
                />
                 <p className="error">{errors.name?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={(e)=>setemail(e.target.value)}
                  placeholder="Enter your email..."
                  {...register("email")} 

                />
              <p className="error">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e)=>setpassword(e.target.value)}
                  placeholder="Enter your password..."
                  {...register("password")} 

                />
                 <p className="error">{errors.password?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  onChange={(e)=>setconfirmPassword(e.target.value)}
                  placeholder="Confirm your password..."
                  {...register("confirmPassword")} 

                />
                 <p className="error">{errors.confirmPassword?.message}</p>

              </div>
              <Button color="primary" className="button">
                Register
              </Button>
            </section>
          </form>
        </Col>
        <Col className="columndiv2" lg="6">
        </Col>
      </Row>
      <Row>
        <Col md={6}>
         <h3>List of Users</h3>
         <table className='table table-bordered'>
           <tbody>
             <tr>
               {
                userList.map((user)=>(
                  <div>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                  </div>
                ))
               }
             </tr>
           </tbody>
         </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
