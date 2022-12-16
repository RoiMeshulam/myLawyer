import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EdittedCase from './EdittedCase';


const EditCase = ({ allCases, currHandlingLawyers,currCaseTypeDetails}) => {
    const [caseId, setCaseId] = React.useState('');
    const [currCaseDetails, setCurrCaseDetails] = React.useState();
    const [showCase, setShowCase] = useState(true);

    const handleOpenCaseDetails = (event) => {
        setShowCase(false);
    };
    const handleCloseCaseDetails = (event) => {
        setShowCase(true);
    };
    const handleCaseId = (event) => {
        setCaseId(event.target.value);
    };
    const FilterCurrCase = () => {
        const temp = allCases.filter(item => item.CaseNum == caseId)
        setCurrCaseDetails(temp)
        if (currCaseDetails) {
            setCurrCaseDetails(currCaseDetails[0])
            handleOpenCaseDetails();
        }
    };
    return (
        <>
            {showCase ?
                <div>
                    <TextField
                        autoFocus
                        multiline
                        margin="dense"
                        id="casenum"
                        label="מספר תיק"
                        fullWidth
                        variant="standard"
                        onChange={handleCaseId}
                    />
                    <Button onClick={FilterCurrCase}>חפש</Button>
                </div>
                :
                <div>
                    <EdittedCase currCaseDetails={currCaseDetails} currHandlingLawyers={currHandlingLawyers} setShowCase={setShowCase} setCurrCaseDetails={setCurrCaseDetails} currCaseTypeDetails={currCaseTypeDetails} />
                    <Button onClick={handleCloseCaseDetails}>חזור לחיפוש תיק חדש</Button>
                </div>}
        </>
    )
}

export default EditCase