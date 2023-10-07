import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Topbar from "../../../Components/Header/topbar";
import { addAccount } from "../../../Services/AccountsApi";


const INACTIVE = "inactive";
const ACTIVE = "active";

export const AccountsStatus = Object.freeze({
  INACTIVE: INACTIVE,
  ACTIVE: ACTIVE,
});

function AddAccounts() {
  const { Formik } = formik;
  const navigate = useNavigate();

  const handaleFormSubmit = async (e)=>{
    console.log('----------',e)
    addAccount(e);
    navigate('/accounts');
  }

  const SpaceBlock = (e) => {
    if (e.target.selectionStart === 0 && e.code === "Space") {
      e.preventDefault();
    }
  }
  

  const schema = yup.object().shape({
    name: yup.string().required(),
    mobile: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required(),
    class: yup.string().required(),
    status: yup.string().required(),
    // subjects: yup.array().required().min(1, 'Please select at least one subject'),
    email:yup.string().required(),
    password:yup.string().required(),
  });

  return (
    <div>
      <Topbar />
    <Container>
      <Row>
        <Col>
          <Formik
            validationSchema={schema}
            // validate={validateSubjects}
            onSubmit={handaleFormSubmit}
            initialValues={{
              name: "",
              mobile: "",
              class: "",

              // status: AccountStatus.ACTIVE,
              email: "",
              password:"",

            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="my-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    className="position-relative"
                  >
                    <Form.Label> Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      onKeyDown={SpaceBlock}
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="position-relative"
                  >
                    <Form.Label> Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      onKeyDown={SpaceBlock}
                      value={values.mobile}
                      onChange={handleChange}
                      isValid={touched.mobile && !errors.mobile}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="position-relative"
                  >
                    <Form.Label> Status</Form.Label>
                    <Form.Select 
                      name="status"
                      aria-label="Default select example"
                      value={values.status}
                      onChange={handleChange}
                      isValid={touched.status && !errors.status}
                    > 
                      <option>Select status</option>
                      <option value={INACTIVE}>Inactive</option>
                      <option value={ACTIVE}>Active</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      Please choose valid status.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                   <Row className="my-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    className="position-relative"
                  >
                    <Form.Label> Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      onKeyDown={SpaceBlock}
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    className="position-relative"
                  >
                    <Form.Label> Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onKeyDown={SpaceBlock}
                      value={values.password}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                    />
                  </Form.Group>

                  </Row>
                  <Row className="my-2">
                  <Col>
                  <Button type="submit">Submit</Button>
                  </Col>
                </Row>
                
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default AddAccounts;

