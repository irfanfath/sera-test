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
import PasswordChecklist from "react-password-checklist"
  
  const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleRegister = () => {
        const data = {
          "username" : username,
          "email" : email,
          "password": password
        }
        axios.post(`${base}/auth/local/register`, data)
        .then((res) => {
          if(res.status === 200){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Berhasil membuat akun, silahkan login",
                showConfirmButton: false,
                timer: 5000
              })
              navigate('/auth/login')
              console.log(res)
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: "Password Tidak Cocok",
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
                    placeholder="Username"
                    type="text"
                    autoComplete="new-username"
                    value={username}
                    onChange={(e) => setUsername(() => e.target.value)}
                   />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                   <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                    onChange={(e) => setEmail(() => e.target.value)}
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
                  <Button className="my-4" color="primary" type="button" onClick={handleRegister}>
                    Sign in
                  </Button> 
                </div>
                <PasswordChecklist
                    rules={["minLength","specialChar","number","capital"]}
                    minLength={8}
                    value={password}
                    onChange={(isValid) => {}}                
                />
              </Form>
              <div
                className="cursor-pointer"
                onClick={()=>navigate('/auth/login')}
              >
                <small>Have account? Login</small>
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default Register;
  