import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Pagination from 'react-bootstrap/Pagination';
import { getAllTeacher, deleteTeacher } from "../../../Services/TeacherApi";
import { getAllClass } from "../../../Services/ClassApi";
import Topbar from "../../../Components/Header/topbar";

function Teacher() {
  const [searchTerm, setSearchTerm] = useState('');
  const [teacherList, setTeacher] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [classList, setClass] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    getTeachers();
    getClasses();
  }, []);

  const getTeachers = () => {
    const response = getAllTeacher();
    console.log(response);
    setTeacher(response);
  };

  const getClasses = () => {
    const response = getAllClass();
    setClass(response);
  };

  const deleteData = (id) => {
    deleteTeacher(id);
    getTeachers();
  };

  const onAddTeacher = () => {
    window.location.href = "/teacher/add";
  };

  const onEditTeacher = (id) => {
    window.location.href = `/teacher/edit/${id}`;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const filteredTeachers = teacherList.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedClass === '' || teacher.class === selectedClass) &&
    (selectedStatus === '' || teacher.status === selectedStatus)
  );

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTeachers = filteredTeachers.slice(startIndex, endIndex);

  return (
    <div>
      <Topbar/>
    <Container>
      <h1> Teacher Information</h1>
      <Row className="py-4">
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Teacher"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/* <Button>
              Search
            </Button> */}
          </Form>
        </Col>
        <Col sm={2}>
          <Form.Select value={selectedClass} onChange={handleClassChange}>
            <option value="">All Classes</option>
            {classList.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col sm={2}>
          <Form.Select value={selectedStatus} onChange={handleStatusChange}>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Select>
        </Col>

        <Col md="auto">
          <Button variant="primary" onClick={onAddTeacher}>
            Add Teacher
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Teacher Name</th>
                <th>Teacher Mobile</th>
                <th> Teacher Class</th>
                {/* <th>Subjects</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTeachers.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.class}</td>
                  {/* <td>{data.subjects.join(', ')}</td> */}
                  <td>
                    <Button
                      variant="primary"
                      style={{ margin: "0px 20px" }}
                      onClick={() => onEditTeacher(data.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      style={{ margin: "0px 20px" }}
                      onClick={() => deleteData(data.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination>
            {Array.from(
              { length: Math.ceil(filteredTeachers.length / itemsPerPage) },
              (_, i) => (
                <Pagination.Item
                  key={i + 1}
                  active={i + 1 === activePage}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              )
            )}
          </Pagination>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Teacher;
