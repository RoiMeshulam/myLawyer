import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getDatabase, ref, update } from "firebase/database";
import { Select, MenuItem } from '@mui/material';



const EdittedCase = ({currCaseDetails, currHandlingLawyers, setShowCase, setCurrCaseDetails, currCaseTypeDetails}) => {
    const [clientName, setClientName] = React.useState(currCaseDetails.ClientName);
    const [currStage, setCurrStage] = React.useState(currCaseDetails.CurrStage);
    const [handlingLawyer, setHandlingLawyer] = React.useState(currCaseDetails.Lawyer);
    const handleNewClientName = (event) => {
        setClientName(event.target.value);
    };
    const handleNewCurrStage = (event) => {
        setCurrStage(event.target.value);
    };
    const handleHandlingLawyer = (event) => {
        setHandlingLawyer(event.target.value);
    };
    const lawyersList = Object.values(currHandlingLawyers)
    const caseTypeList = Object.entries(currCaseTypeDetails)
    const temp = caseTypeList.filter(item => item[0] == currCaseDetails.CaseType)
    console.log(temp)

    function updateCase() {
        const db = getDatabase();
        let plaster = 'Cases/'+currCaseDetails.CaseNum;
        update(ref(db, plaster), {
            ClientName : clientName,
            CurrStage : Number(currStage),
            Lawyer : handlingLawyer,
        })
        setShowCase(true)
        setCurrCaseDetails()
        alert("תיק עודכן בהצלחה")
    }

    return (
        <div>
            <TextField
                disabled
                multiline
                margin="dense"
                id="casenum"
                label="מספר תיק"
                fullWidth
                variant="standard"
                defaultValue={currCaseDetails.CaseNum}
            />
            <TextField
                multiline
                margin="dense"
                id="casenum"
                label="שם לקוח"
                fullWidth
                variant="standard"
                defaultValue={clientName}
                onChange={handleNewClientName}
            />
            <TextField
                disabled
                multiline
                margin="dense"
                id="casenum"
                label="סוג תיק"
                fullWidth
                variant="standard"
                defaultValue={currCaseDetails.CaseType}
            />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currStage}
                label="שלב נוכחי"
                onChange={handleNewCurrStage}
            >
                {temp[0][1].map((stage, index) => (<MenuItem value={index}>{index}</MenuItem>))}
            </Select>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={handlingLawyer}
                label="עורך דין מטפל"
                onChange={handleHandlingLawyer}
            >
                {lawyersList.map((lawyer) => (<MenuItem value={lawyer}>{lawyer}</MenuItem>))}
            </Select>
            <Button onClick={updateCase}>עדכן תיק</Button>
        </div>
    )
}

export default EdittedCase