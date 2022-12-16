import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const AddLawyer = () => {
    const strongPassword = '123Lawyerfix'
    const [newLawyerUsername, setNewLawyerUsername] = useState('');
    const [newLawyerPassword, setNewLawyerPassword] = useState('');
    const [newStrongPassword, setNewStrongPassword] = useState('');

    const handleNewLawyerUsername = (event) => {
        setNewLawyerUsername(event.target.value);
    };
    const handleNewLawyerPassword = (event) => {
        setNewLawyerPassword(event.target.value);
    };
    const handleNewStrongPassword = (event) => {
        setNewStrongPassword(event.target.value);
    };
    const auth = getAuth();
    const createNewLawyer = () => {
        if (newStrongPassword === strongPassword) {
            console.log(newLawyerUsername)
            console.log(newLawyerPassword)
            createUserWithEmailAndPassword(auth, newLawyerUsername, newLawyerPassword)
        }
        else {
            console.log(newStrongPassword)
            console.log("Password isnt equal")
        }

    };

    return (
        <>
        <div className='addLawyer'>

            <input  type='text'
            placeholder='הכנס/י מייל עורך דין חדש' 
            style={{marginTop:'20px',marginRight:'10px',width:'100%',height:'45px',borderRadius:'4px' , border:'1px solid #d0b49f', boxSizing:'border-box', direction:'rtl' }}
            onChange={handleNewLawyerUsername}
            id="mail"
            />

            <input  type='password'
            placeholder='הכנס/י סיסמת עורך דין חדש' 
            style={{marginTop:'20px', marginRight:'10px',width:'100%',height:'45px',borderRadius:'4px' , border:'1px solid #d0b49f', boxSizing:'border-box', direction:'rtl' }}
            onChange={handleNewLawyerPassword}
            id="pass"
            />

            <input  type='text'
            placeholder='סיסמת מנהל' 
            style={{marginTop:'20px',marginRight:'10px',width:'100%',height:'45px',borderRadius:'4px' , border:'1px solid #d0b49f', boxSizing:'border-box', direction:'rtl' }}
            onChange={handleNewStrongPassword}
            id="pass-manager"
            
            />



            {/* <TextField
                autoFocus
                margin="dense"
                id="mail"
                label="מייל"
                type="email"
                fullWidth
                variant="standard"
                onChange={handleNewLawyerUsername}
            />
            <TextField
                autoFocus
                margin="dense"
                id="pass"
                label="סיסמא"
                type="password"
                fullWidth
                variant="standard"
                onChange={handleNewLawyerPassword}
            />
            <TextField
                autoFocus
                margin="dense"
                id="pass"
                label="סיסמת מנהל בכיר"
                type="password"
                fullWidth
                variant="standard"
                onChange={handleNewStrongPassword}
            /> */}
            {/* <Button onClick={createNewLawyer}>רישום</Button> */}
            </div>
            <div>
            <button onClick={createNewLawyer} className="btn-casetype" style={{marginTop:'20px',width:'33%'}}>הוסף עורך דין</button>
            </div>
        </>
        
         
    )
}

export default AddLawyer