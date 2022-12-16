import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { onValue, ref , set,getDatabase,child,get} from "firebase/database";



function Row(props) {
    
  const { row } = props;
  const [open, setOpen] = React.useState(false);
    
    // console.log({row});
    
  
  return (
    
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right" component="th" scope="row">
          {row.CaseNum}
        </TableCell>
        <TableCell align="right">{row.ClientName}</TableCell>
        <TableCell align="right">{row.CaseType}</TableCell>
        <TableCell align="right">{row.CurrStage}</TableCell>
        <TableCell align="right">שם חברה</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                discreption
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.discreption.map((discreptionRow) => (
                    <TableRow key={discreptionRow.date}>
                      <TableCell component="th" scope="row">
                        {discreptionRow.date}
                      </TableCell>
                      <TableCell>{discreptionRow.customerId}</TableCell>
                      <TableCell align="right">{discreptionRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(discreptionRow.amount * row.temp * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable(props) {

  //previewIndex: 
  // 0--> תיקים פעילים
  // 1--> כל התיקים

      console.log(props.cases)
      

        return (
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell align="right">מספר תיק</TableCell>
                    <TableCell align="right">שם הלקוח</TableCell>
                    <TableCell align="right">סוג התיק</TableCell>
                    <TableCell align="right">שלב נוכחי</TableCell>
                    <TableCell align="right">פעולות</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {
                   
                 props.cases.map((row) => (
                    // console.log(row.Status),
                    <Row key={row.CaseNum} row={row} />
                  ))
                  
                  
                  }
                </TableBody>
              </Table>
            </TableContainer>
          );




    
    
  
}