import React from "react";
import { Link } from "react-router-dom";
import { Row,Col,Form, Button } from "react-bootstrap";
const ResultLoginPage=()=>{
    return(
        <>
         <Link to='/' className="btn btn-dark"
         style={{marginTop:'1rem'}}>Go Back</Link>
         <Row className="text-center">
            <Col>
                <h3>Check your Result here....</h3>
                
            </Col>
         </Row>
         <br/>
         <Row>
            <Col></Col>
            <Col style={{marginLeft:'-20rem'}}>
                <Form>
                    <Form.Label>Enter Your Register NO:</Form.Label><br/>
                    <Form.Control type="text" placeholder="Enter Your Register NO"
                    style={{width:'70%'}}/>
                    <br/>
                    
                    <Button type="submit">submit</Button>
                </Form>
            </Col>
         </Row>
        </>
    )
}
export default ResultLoginPage;