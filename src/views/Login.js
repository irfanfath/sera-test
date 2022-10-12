import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroup,
    Col
  } from "reactstrap";
import Swal from "sweetalert2";
import { base } from "../api/base";
  
  const Login = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleLogin = () => {
        const data = {
          "identifier" : identifier,
          "password": password
        }
        axios.post(`${base}/auth/local`, data)
        .then((res) => {
          if(res.status === 200){
              localStorage.setItem("token", res.data.jwt);
              localStorage.setItem("authentihated", true);
              navigate('/admin/index')
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: "Username/Password Salah",
              showConfirmButton: false,
              timer: 5000
            })
          }
        }).catch((err) => {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: err.response.data.error.message,
              showConfirmButton: false,
              timer: 5000
            })
        });      
    }

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                   <Input
                    placeholder="Username/Email"
                    type="text"
                    autoComplete="new-username"
                    value={identifier}
                    onChange={(e) => setIdentifier(() => e.target.value)}
                   />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(() => e.target.value)}
                    /> 
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={handleLogin}>
                    Sign in
                  </Button>
                </div>
              </Form>
              <div
                className="cursor-pointer"
                onClick={()=>navigate('/auth/register')}
              >
                <small>Create new account</small>
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default Login;
  