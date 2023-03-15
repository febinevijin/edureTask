import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditContact = () => {
  const params = useParams();
  const [details, setDetails] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  let navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/contact/singleContact/${params.id}`
      );

      setDetails(data);
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setAddress(data.address);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const editData = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("fill all field");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `http://localhost:5000/api/contact/updateContact/${params.id}`,
        {
          name,
          email,
          phone,
          address,
        },
        config
      );
      setDetails(data);
      alert("contact updated");

      navigate("/contactList");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Container>
        <Form onSubmit={editData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="test"
              value={details?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              value={details?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="test"
              value={details?.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="test"
              value={details?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditContact;
