import React from "react";
import{Row,Col,Form} from "react-bootstrap";
import TableData from "./TableData";
const ResultPage=()=>{
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
                    <Form.Label style={{marginLeft:'4.5rem'}}>Kalai M</Form.Label><br/>
                    <Form.Label>Father's/Mother's Name:</Form.Label>
                    <Form.Label style={{marginLeft:'0.5rem'}}>Riya M</Form.Label><br/>
                    <Form.Label>College Name:</Form.Label>
                    <Form.Label style={{marginLeft:'4.5rem'}}>Oxford University</Form.Label>
                </Form.Group>
             </Col>
               <Form.Group>
                   <Form.Label style={{float:'right'}}>Register No: 1ST20CS228</Form.Label>
                  
               </Form.Group>
             
          </Row>
          <Row>
          <TableData></TableData>
          </Row>
        </>
    )
}
export default ResultPage