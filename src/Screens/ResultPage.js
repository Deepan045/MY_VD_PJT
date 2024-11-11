import React from "react";
import{Row,Col,Form} from "react-bootstrap";
import TableData from "./TableData";
import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const ResultPage=()=>{
  const [Studentdetails,setStudentdetails]=useState([])
  const value= useParams()
  useEffect(()=>{
    axios.get('http://localhost:3002/studentinfo')
    .then((response)=>{
      response.data.map((data)=>{
        if(data.registerId === value.id){
          setStudentdetails(data)
        }
        
      })
    })
  },[])

    return(
        <>
          <Row className="justify-content-center my-5">
            <Col sm={12} md={6}>
                <h4 >Vivesveraya Technological University,Belegaum</h4>
                <h6 style={{marginLeft:'4rem',fontSize:'15px'}}>
                    VII- Semester B.E Examination Result,Nov/Dec-2024</h6>
            </Col>
          </Row>
          <Row>
             <Col sm={12} md={6}>
                <Form.Group>
                    <Form.Label>Student Name:</Form.Label>
                    <Form.Label style={{marginLeft:'4.5rem'}}>{Studentdetails.studentname}</Form.Label><br/>
                    <Form.Label>Father's/Mother's Name:</Form.Label>
                    <Form.Label style={{marginLeft:'0.5rem'}}>{Studentdetails.FatherName}</Form.Label><br/>
                    <Form.Label>College Name:</Form.Label>
                    <Form.Label style={{marginLeft:'4.5rem'}}>{Studentdetails.collegeName}</Form.Label>
                </Form.Group>
             </Col>
               <Form.Group>
                   <Form.Label style={{float:'right'}}>Register No: {Studentdetails.registerId}</Form.Label>
                  
               </Form.Group>
             
          </Row>
          <Row>
          <TableData studentId = {Studentdetails.registerId}></TableData>
          </Row>
        </>
    )
}
export default ResultPage