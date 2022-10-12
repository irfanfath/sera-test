import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Button
  } from "reactstrap";
import Swal from "sweetalert2";
import { base } from "../api/base.js";
  // core components
import Header from "../components/Headers/Header.js";
  
  const Index = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate()

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


    const deleteData = async (id) => {
      try {
        await axios.delete(`${base}/articles/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("_beertk")}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Success Delete Article",
          showConfirmButton: false,
          timer: 5000
        });
        window.location.reload()
      } catch (error) {
          console.error("ERROR :", error.message);
      }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const columns = [
      {
        id: 1,
        name: "Title",
        selector: (row) => row.attributes.title,
        sortable: true,
        reorder: true
      },
      {
        id: 2,
        name: "Content",
        selector: (row) => row.attributes.content,
        sortable: true,
        reorder: true
      },
      {
        id: 3,
        name: "CreatedAt",
        selector: (row) => row.attributes.createdAt,
        sortable: true,
        reorder: true
      },
      {
        id: 5,
        name: "Action",
        selector: (row) =><><Button color="info" onClick={()=>navigate('/admin/detail-article/'+row.id)}><img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/20/FFFFFF/external-view-user-interface-kmg-design-glyph-kmg-design.png" alt="view" title="View & Edit"/></Button><Button color="danger" onClick={()=>deleteData(row.id)}><img src="https://img.icons8.com/wired/20/FFFFFF/filled-trash.png" alt="delete" title="Delete"/></Button></>,
        sortable: true,
        reorder: true
      }
    ];
    

    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0 progress-info">
                  <Button onClick={()=>navigate('/admin/new-article')} color="success" type="button">&#43; Create New Article</Button>
                  </CardHeader>
                <DataTable
                  title="List Article"
                  columns={columns}
                  data={data}
                  defaultSortFieldId={1}
                  pagination
                />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Index;
  