import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
  } from "reactstrap";
import Swal from "sweetalert2";
import { base } from "../api/base";

  
  const NewArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate()


    const createData = () => {
      const data = {
        data: {
          "title" : title,
          "content": content
        }
      }
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      }
      axios.post(`${base}/articles`, data, {
        headers: headers,
      })
      .then((res) => {
        if(res.status === 200){
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "Success Create Article",
              showConfirmButton: false,
              timer: 5000
            })
          navigate('/admin/article')
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Failed Create Article",
            showConfirmButton: false,
            timer: 5000
          })
        }
      }).catch((err) => {
          console.log(err)
      });      
    }
    return (
      <>
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
          <span className="mask bg-gradient-default opacity-8" />
        </div>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Crate New Article</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">Data Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-title"
                            >
                              Title
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-title"
                              placeholder="Title"
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(() => e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Content
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-content"
                              placeholder="Content"
                              type="text"
                              value={content}
                              onChange={(e) => setContent(() => e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="pl-lg-6">
                      <hr className="my-4" />
                      <Row className="justify-content-end">
                        <Col lg="3">
                            <Button 
                                color="success"
                                onClick={createData}
                                >
                            Save Data
                            </Button>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default NewArticle;
  