import React,{useState,useEffect}from "react";
import { Table,Container } from "react-bootstrap";
import axios from "axios";
const TableData=({studentId})=>{

    const[resultDetails,setresultDetails]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3002/studentinfo')
        .then((response)=>{
            console.log(response.data)
            let temp=[]
            temp=response.data.filter((d)=>d.registerId === studentId )
            setresultDetails(temp)
        })
        .catch((error)=>console.log("err",error))
    },[studentId])
    const getTotalMarks=(value)=>{
        let sum=0
        resultDetails.map((d) => {
            sum+= parseInt(d[value])
        })
        return sum
    }
    return(
       <Container>
        <Table className="my-5" responsive bordered>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Sl No</th>
                    <th colSpan={2}>Subject
                         <th style={{padding:'0px 10rem'}}>Code</th>
                         <th style={{paddingLeft:' 10rem'}}>Subject</th>
                    </th>
                    <th colSpan={3}>Examination Marks Obtained
                         <th style={{paddingLeft:' 10rem'}}>Max</th>
                         <th style={{paddingLeft:' 10rem'}}>Min</th>
                         <th style={{paddingLeft:' 10rem'}}>Obtained</th>
                    </th>
                    <th style={{padding:'0px 10rem'}}>Subject Result</th>
                </tr>
            </thead>
            <tbody>
               {
                resultDetails.map((data,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.code}</td>
                        <td>{data.Subject}</td>
                        <td>{data.max_marks}</td>
                        <td>{data.min_marks}</td>
                        <td>{data.obtained_marks}</td>
                        <td>{data.result}</td>
                    </tr>
                ))
            }
            </tbody>
            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>{getTotalMarks('max_marks')}</td>
                    <td>{getTotalMarks('min_marks')}</td>
                    <td>{getTotalMarks('obtained_marks')}</td>
                    <td>PASS</td>
                </tr>

            </thead>
        </Table>

        <p><b>Total Marks Obtained[in words]</b>
        Two Hundred And Sixty Eight Only</p>
        <p><b>Result of Semester</b>:PASS</p>
        <p><b>Percentage:</b>67%</p>
        <p><b>Date</b>:05 DEC 2024</p>
       </Container>
    )
}
export default TableData