import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EmployeeSvc, { IEmployee } from "../../service/EmployeeSvc";

export interface IEmpOperationState {
  empId: number;
  empData: IEmployee[];
  message: string;
  hideForm: boolean;
  empFormData: IEmployee;
}


const initialState: IEmpOperationState = {
    empId: 0,
    empData:[],
    message: "NA",
    hideForm: true,
    empFormData: {} as IEmployee,
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
                    "lName":"gadhavi",
                    "salary":11.67,
                    "grade": "e3",
                    "isContractor": true
                  }];
            },
            hideEmpForm: (state, action: PayloadAction<boolean>) =>{
                
                 state.hideForm = action.payload;
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
                    default:
                        break;
                }
                
            },
            saveEmp:(state) =>{
                console.log(state.empFormData.isContractor);
                state.empFormData.isContractor === undefined ? state.empFormData.isContractor = true: false;
                EmployeeSvc.addEmp(state.empFormData);
                state.empData = [];
                state.hideForm = true;
            }
        }
    }
 ); 

 export const {delEmp, hideEmpForm, saveEmpFormData, saveEmp} = empSlice.actions;
 export default empSlice.reducer;