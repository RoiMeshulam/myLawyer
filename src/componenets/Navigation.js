import React from 'react'
import { useState } from 'react';
import { onValue, ref , set,getDatabase,child,get} from "firebase/database";






const Navigation = ( props ) => {
    const [defaultScreen,setDefaultScreen]= useState(true);
   

  const GetAllCasesFromDB= React.useCallback(() => {
    if (true) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Cases/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                const b = Object.entries(snapshot.val())
                console.log(b)
                const c = b.map((item) => item[1])
                console.log(c)
                const d = c.filter(item=> item.Status === 1);
                console.log(d)
                props.setAllCases(c)
                props.setActiveCases(d)
                
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}, [true])


const GetAllCaseTypeFromDB = React.useCallback(() => {
    if (true) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `CaseType/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                props.setAllCaseTypes(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}, [true])
const GetAllLawyersFromDB = React.useCallback(() => {
    if (true) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Lawyers/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                props.setAllLawyers(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}, [true])

const GetAllClientReqFromDB = React.useCallback(() => {
    if (true) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `ClientReq/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                props.setAllClientReq(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
????????},??[true])

    if(defaultScreen){
        console.log("defaultscreenn")
        GetAllCasesFromDB()
        GetAllClientReqFromDB()
        GetAllLawyersFromDB()
        GetAllCaseTypeFromDB()
        setDefaultScreen(false)
    }

  return (
    <div className='container-btn'>
        <button className="btn-group" onClick={(e)=> {
          props.onClick(e,0)
          GetAllCasesFromDB()
        }
          
          }
          >
          ?????????? ????????????
        </button>
        <button className="btn-group" onClick={(e)=> {
          props.onClick(e,1)
          GetAllCasesFromDB()
        }
        
         }>
          ???? ????????????
        </button>
        <button className="btn-group" onClick={(e)=> {
          props.onClick(e,2)
          GetAllCaseTypeFromDB()
        }
          }>
          ???? ???????? ????????????
        </button>


        <hr
            style={{
            background: '#D0B49F',
            color: '#D0B49F',
            height: '3px',
            width:'100%'
            }}
        />

        <button className="btn-group" onClick={(e)=> {
           props.onClick(e,3)
           GetAllCaseTypeFromDB()
           GetAllLawyersFromDB()


        }
         }>
          ?????????? ?????? ??????
        </button>
        <button className="btn-group" onClick={(e)=>{
          props.onClick(e,4)
        }
           }>
            ?????????? ?????? ?????? ??????
        </button>
        <button className="btn-group" onClick={(e)=>{
          props.onClick(e,5)
          GetAllCasesFromDB()
          GetAllLawyersFromDB()
          GetAllCaseTypeFromDB()

        }
           }>
            ?????????? ?????? ????????
         </button>

        <hr
            style={{
            background: '#D0B49F',
            color: '#D0B49F',
            height: '3px',
            width:'100%'
            }}
        />

         <button className="btn-group" onClick={(e)=>
           props.onClick(e,6)}>
            ?????????? ???????? ??????
          </button>
         <button className="btn-group" onClick={(e)=>
         {
            props.onClick(e,7)
            GetAllClientReqFromDB()
         }
           }>
            ?????????? ????????
          </button>

  </div>
  )
}

export default Navigation
