import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ContactList = () => {
    let navigate = useNavigate();
    const [contacts, setContacts] = useState();

    
    const deleteContact = async (id) => {
       try {
       const { data } = await axios.delete(
         `http://localhost:5000/api/contact/deleteContact/${id}`
         );
         
       } catch (error) {
        console.log(error.message);
       } 
    }

    const getContacts = async () => {
        try {
             
            const { data } = await axios.get(
              "http://localhost:5000/api/contact/allContacts"
            );

             setContacts(data);
             console.log(data);
         } catch (error) {
            console.log(error.message);
         }
       
     };

    useEffect(() => {
      const userInfo = localStorage.getItem("userInfo");
      console.log(userInfo);
      if (!userInfo) {
        navigate("/authPage");
      }
      getContacts();
    }, []);
    
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>
                  <Button
                    href={`/editContact/${data._id}`}
                    className="bg-success"
                    
                  >
                    edit
                  </Button>
                  <Button
                    className="btn-danger"
                    onClick={() => deleteContact(data._id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactList
