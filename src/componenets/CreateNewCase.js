import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getDatabase, ref, set } from "firebase/database";
import { Select, MenuItem } from '@mui/material';


const CreateNewCase = ({currCaseTypeDetails,currHandlingLawyers}) => {
    const [newCaseNum, setNewCaseNum] = useState('');
    const [newClientName, setNewClinetName] = useState('');
    const [newCaseType, setNewCaseType] = React.useState('');
    const [newHandlingLawyer, setNewHandlingLawyer] = React.useState('');

    const handleNewCaseNum = (event) => {
        setNewCaseNum(event.target.value);
    };
    const handleNewClinetName = (event) => {
        setNewClinetName(event.target.value);
    };
    const handleNewCaseType = (event) => {
        setNewCaseType(event.target.value);
    };
    const handleNewHandlingLawyer = (event) => {
        setNewHandlingLawyer(event.target.value);
    };
    const clearAllFields = () => {
        setNewCaseNum('');
        setNewClinetName('');
        setNewCaseType('');
        setNewHandlingLawyer('');
    };

    const caseTypeList = Object.keys(currCaseTypeDetails)
    const lawyersList = Object.values(currHandlingLawyers)

    function writeNewCase() {
        const db = getDatabase();
        let plaster = 'Cases/'+newCaseNum;
        set(ref(db, plaster), {
            CaseNum: newCaseNum,
            CaseType: newCaseType,
            ClientName: newClientName,
            CurrStage: 1,
            Lawyer: newHandlingLawyer,
            Status: 1,
        })
        clearAllFields();
        alert("נוצר תיק חדש")
    }

    return (
        <div className='addLawyer'>
            <TextField
                autoFocus
                margin="dense"
                id="caseNum"
                label="מספר תיק"
                type="text"
                fullWidth
                variant="standard"
                value={newCaseNum}
                onChange={handleNewCaseNum}
            />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newCaseType}
                label="סוג תיק"
                onChange={handleNewCaseType}
            >
                {caseTypeList.map((casetype) => (<MenuItem value={casetype}>{casetype}</MenuItem>))}
            </Select>
            <TextField
                autoFocus
                margin="dense"
                id="clientName"
                label="שם לקוח"
                type="text"
                fullWidth
                variant="standard"
                value={newClientName}
                onChange={handleNewClinetName}
            />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newHandlingLawyer}
                label="עורך דין מטפל"
                onChange={handleNewHandlingLawyer}
            >
                {lawyersList.map((lawyer) => (<MenuItem value={lawyer}>{lawyer}</MenuItem>))}
            </Select>
            <Button onClick={writeNewCase}>הוסף תיק</Button>
        </div>
    )
}

export default CreateNewCase