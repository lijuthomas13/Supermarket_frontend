import { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from "material-ui-search-bar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import DoneIcon from '@mui/icons-material/Done';
import Avatar from '@mui/material/Avatar';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import { color } from '@mui/system';
import { MDBCol } from "mdbreact";
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import '../../src/styles_admin/Employee/Table.css'
import Delete from '@mui/icons-material/Delete';
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import EditSalary from './EditSalary';
function Payroll() {
  const [editOpen,setEditOpen]=useState(false)
  const [editEmpId,setEditEmpId]=useState(null)
  const [searchItem,setSearchItem]=useState("")
  const [currentId,setCurrentId]=useState(1)
  function display(ref) {
    console.log(ref)
  }
  
  const [post, setPost] = useState([]);
  React.useEffect(() => {
    axios.get('http://192.168.2.74/employee/all').then((response) => {
      setPost(response.data);
    });
  }, []);

  

  const [value, onChange] = useState([new Date(), new Date()]);
  const [rows, setrows] = useState(post)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [option,setoption]=useState(0)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - post.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  

function Row(props) {
  const { row } = props
  const [open, setOpen] =useState(false);
  const [searched, setSearched] = useState("");
  const Total_salary={netSalary:33500,totalGross:34000,totalDeduction:500}
  const [salary, setSalary] = useState([]);
  const [editOption,setEditOption]=useState(false)
  React.useEffect(() => {
    axios.get(`http://192.168.2.74/salary/view/${row.id}/all`).then((response) => {
      setSalary(response.data);
    });
  }, []);
  console.log(salary,'salaary of emp')

  const [totalSalary, setTotalSalary] = useState({});
  React.useEffect(() => {
    axios.get(`http://192.168.2.74/Salary/Totals/${row.id}`).then((response) => {
      setTotalSalary(response.data);
    });
  }, []);
  console.log(totalSalary,'totalsalaary of emp')

  function handleEditDropdown(){
    setEditOpen(!editOpen)
    setEditEmpId(row.id)
  }

 
  return (
    
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
          
            <IconButton
              aria-label="expand row"
              size="small"
              
              onClick={() => { setOpen(!open) }}
              
            >
              

              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          
          <TableCell component="th" scope="row"><Avatar alt="Travis Howard" src={row.profilePic} /></TableCell>
          <TableCell component="th" scope="row">{row.id}</TableCell>
          <TableCell component="th" scope="row">{row.firstName}</TableCell>
          <TableCell component="th" scope="row">{row.lastName}</TableCell>
          <TableCell component="th" scope="row">{row.email}</TableCell>
          <TableCell component="th" scope="row">{row.designation}</TableCell>
          <TableCell component="th" scope="row">{totalSalary.netSalary!==0?null:<Button onClick={handleEditDropdown} ><AddIcon /></Button>}</TableCell>
          <TableCell align="center" component="th" scope="row">{row.isVerified ? <VerifiedUserIcon style={{ color: 'green', fontSize: '25px' }} /> : <GppBadIcon style={{ color: 'red', fontSize: '29px' }} />}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Salary Details
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                    {salary.map((item)=>(<TableRow >
                      <TableCell component="th" scope="row">{item.salaryComp}</TableCell>
                      <TableCell align="leftt">{item.amount}</TableCell>
                      {/* <Button onClick={setEditOption(!editOption)} color="primary" >
                        <EditIcon />
                      </Button>
                      <TableCell>
                      {editOption?<TextField style={{height:'5px'}} id="outlined-basic" label="Outlined" variant="standard" />:null}
                      </TableCell> */}
                      

                    </TableRow>))} 
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
                  <TableFooter>
                    <TableRow>
                    </TableRow>
                  </TableFooter>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div>
    {editOpen?<EditSalary data={editEmpId}/>:<div class='container' >
    <h1>Salary Details</h1>
    <div class='card' id='table_comp' style={{marginLeft:'0px'}}>
      <div class='container'>
        <div class='row'>
          <div class="col-sm">
            <MDBCol >
              <input  className="form-control" type="text" placeholder="Search" aria-label="Search"  onChange={(e)=>{setSearchItem(e.target.value)}}/>
              
            </MDBCol>
          </div>
          <div class='col-sm'>

            <select class="form-select" aria-label="Default select example" onChange={(e)=>{setoption(e.target.value)}} >
              <option selected value='0'>All Employees</option>
              <option value="1">Employee</option>
              <option value="2">HR</option>
              <option value="3">Managers</option>
            </select>
            
          </div>
          <div class='col-sm'>
            {/* <DateRangePicker id='calendar' onChange={onChange} value={value} /> */}
          </div>
        </div>
        <div class='row' id='table_row'>
        <TableContainer component={Paper}>

          <Table  aria-label="collapsible table">
            <TableHead id='table_head'>
                
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell>ID </TableCell>
                <TableCell>First Name </TableCell>
                <TableCell >LastName</TableCell>
                <TableCell >E-mail</TableCell>
                <TableCell >Designation</TableCell>
                <TableCell >Add Salary</TableCell>
                <TableCell align="center">Verification status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {(rowsPerPage > 0
                ? post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : post
              ).map((row) => (
                <Row row={row} />
              ))} */}
              
              
                
                {post.filter((item) => {
                  
                  if (searchItem === '' && option === 0) {
                    return item;
                  }
                  else if (
                    item.firstName.toLowerCase().includes(searchItem.toLocaleLowerCase()) &&option==0) {
                    return item;
                  }
                  else if(searchItem === '' && option == item.userType){
                    return item;
                  }
                  else if(item.firstName.toLowerCase().includes(searchItem.toLocaleLowerCase()) &&option == item.userType){
                    return item
                  }
                }).map((item) => (<Row row={item} />))}

                
            </TableBody>
            <TablePagination
              rowsPerPageOptions={[1, 5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={post.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}

            />
          </Table>
        </TableContainer>
        </div>
      </div>
    </div>
    {/* {editOpen?<div>Edit</div>:null} */}
  </div>}
  </div>
    

  )
}

export default Payroll