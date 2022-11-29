
import * as React from 'react';
import '../index.css';
import Allcases from './allcases';
import Lawyerlogo from './logo';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Button from './button';
import CollapsibleTable from './table';

const LawyerDashboard = () => {
  return (
    <div>
        <Lawyerlogo/>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Item>
              <div className='container'>
                <Allcases/>
                <CollapsibleTable/>
              </div>

            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
            <div className='container-btn'>
              
                <Button text='תיקים פעילים'/>
                <Button text='כל התיקים'/>
                <Button text='כל סוגי התיקים'/>
                {/* <h3>-------------------</h3> */}
                <hr
                  style={{
                    background: '#D0B49F',
                    color: '#D0B49F',
                    // borderColor: '#D0B49F',
                    height: '3px',
                    width:'100%'
                  }}
                />
                <Button text='יצירת תיק חדש'/>
                <Button text='יצירת סוג תיק חדש'/>
                <Button text='עריכת תיק קיים'/>
             
                
               
              </div>
            </Item>
          </Grid>
        </Grid>


        
        {/* <ButtonAppBar/> */}
        {/* <Allcases/> */}

    </div>
    



    // <div className='Dashboard'>
    //     <h1>hello</h1>
    // </div>
  )
}

export default LawyerDashboard
