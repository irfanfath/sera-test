import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { base } from "../../api/base";

const Header = () => {
  const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const { data: response } = await axios.get(`${base}/articles`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("_beertk")}`,
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                },
            });
            setData(response.data);
        } catch (error) {
            console.error("ERROR :", error.message);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-7">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Article
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {data.length}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
}

export default Header;
