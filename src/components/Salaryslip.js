import React from 'react'
import { useEffect, useRef ,useState} from 'react';
import { jsPDF } from 'jspdf';
import '../styles/Salaryslip.css'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Salaryslip() {

    const id=12;
    const [emp, setEmp] = useState([]);
    
        axios.get(`http://192.168.2.74/employee/${id}`).then((response)=>{
            setEmp(response.data)
        })
    const [Salary, setSalary] = useState([]);
    React.useEffect(() => {
        axios.get(`http://192.168.2.74/salary/view/${id}/all`).then((response) => {
          setSalary(response.data);
        });
      }, [id]);
    
      const [flag,setflag]=useState(false)
      const [totalSalary, setTotalSalary] = useState({});
      React.useEffect(() => {
        axios.get(`http://192.168.2.74/Salary/Totals/${id}`).then((response) => {
          setTotalSalary(response.data);
          setflag(!flag)
        });
      }, [id]);
    

//    const Salary=[{"salaryComp":"Onam Bonus","amount":2000},{"salaryComp":"House Loan","amount":1000},{"salaryComp":"Basic Pay","amount":30000}]
    const pdfRef = useRef(null);

    const handleDownload = () => {
        const content = pdfRef.current;

        const doc = new jsPDF({
          format: 'a3',
          unit: 'px',
          'pagesplit': true,
        });
    
        doc.html(content, {
            callback: function (doc) {
                doc.save('sample.pdf');
            }
        });
    };

    return (
        <div style={{backgroundColor:'#D9DFFB',height:'100vh',textAlign:'center',alignContent:'center'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <header  ref={pdfRef}>
                <div  style={{width: '640px',height:'650px',backgroundColor:'#D9DFFB',textAlign:'center',dataHtml2canvasIgnore:"false"}}>
                <h5 style={{textAlign:'center'}}>Salary Slip</h5>
                <h6>Name : {emp.firstName} {emp.lastName}</h6>
                <h6>ID : {emp.id}</h6>
                <h6>Designation :{emp.designation}</h6>
                
                <br/>
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor:'#010322',color:'white'}}>
                            <TableCell style={{color:'white'}}><strong>Component</strong></TableCell>
                            <TableCell  style={{color:'white'}}><strong>Amount</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Salary.map((row) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {row.salaryComp}
                                </TableCell>
                                <TableCell >{row.amount}</TableCell>
                            </TableRow>
                        ))}
                          <TableRow style={{backgroundColor:'#E5EAFF'}}>
                      <TableCell><strong>Net Salary</strong></TableCell>
                      <TableCell component="th" scope="row"><strong>{totalSalary.netSalary}</strong></TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor:'#E5EAFF'}}>
                      <TableCell><strong>Deduction</strong></TableCell>
                      <TableCell component="th" scope="row"><strong>{totalSalary.totalDeduction}</strong></TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor:'#E5EAFF'}}>
                      <TableCell><strong>Gross</strong></TableCell>
                      <TableCell component="th" scope="row"><strong>{totalSalary.totalGross}</strong></TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
                </div>
            </header>
            
                
            

            
        </div>
        <div>
        
        {flag? <Button onClick={handleDownload} variant="contained" endIcon={<DownloadIcon />}>
        Download
      </Button>:<CircularProgress />}
        </div>

        </div>
        
    );
}