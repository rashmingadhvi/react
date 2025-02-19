import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EmployeeSvc, { IEmployee } from "../../service/EmployeeSvc";

import { AddressDataType } from "../../comp/interfaces/AddressDataType";

export interface IEmpOperationState {
  empId: number;
  empData: IEmployee[];
  message: string;
  hideForm: boolean;
  empFormData: IEmployee;
  validForm: boolean;
}


const initialState: IEmpOperationState = {
    empId: 0,
    empData:[],
    message: "NA",
    hideForm: true,
    empFormData: {} as IEmployee,
    validForm: false,
  };


 export const empSlice = createSlice(
    {
        name: 'empsvc',
        initialState,
        reducers:{
            delEmp: (state, action: PayloadAction<number>) => {
                EmployeeSvc.deleteEmp(action.payload|0);
                state.empData = [{
                    "empId":1,
                    "fName":"rmk1",
                    "lName":"gadhvi",
                    "salary":11.67,
                    "grade": "e3",
                    "isContractor": true,
                    "homeAddress":{} as AddressDataType,
                    "officeAddress":{} as AddressDataType,
                  }];
            },
            hideEmpForm: (state, action: PayloadAction<boolean>) =>{
                
                 state.hideForm = action.payload;
                 state.empFormData = {} as IEmployee;
            },
            saveEmpFormData:(state, action:PayloadAction<{type:string,value:string}>) =>{
                switch(action.payload.type){
                    case "fname":
                        state.empFormData.fName = action.payload.value;
                        break;
                       
                            case "lname":
                        state.empFormData.lName = action.payload.value;
                        break;
                        case "salary":
                        state.empFormData.salary = Number.parseFloat(action.payload.value);
                        break;
                        case "grade":
                            state.empFormData.grade = action.payload.value;
                            break;
                        case "contractor":
                            console.log(action.payload.value);
                        state.empFormData.isContractor = "true"===action.payload.value || undefined === action.payload.value;
                        break;
                        case "address":
                          state.empFormData.homeAddress = JSON.parse(action.payload.value);
                          break;
                    default:
                        break;
                }
                
            },
            saveEmp:(state) =>{
                
                state.empFormData.isContractor === undefined ? state.empFormData.isContractor = true: false;
              
              
              let valid = true;
              if(state.empFormData.fName == '' || state.empFormData.fName == undefined){
                    valid = false;
              }
              if(state.empFormData.fName == '' || state.empFormData.fName == undefined){
                valid = false;
              }
              if(valid){
                EmployeeSvc.addEmp(state.empFormData);
                state.empData = [];
                state.hideForm = true;
                state.validForm =true;
              }else{
                state.hideForm = false;
                state.validForm = false;
              }
                
            }
        }
    }
 ); 

 export const {delEmp, hideEmpForm, saveEmpFormData, saveEmp} = empSlice.actions;
 export default empSlice.reducer;