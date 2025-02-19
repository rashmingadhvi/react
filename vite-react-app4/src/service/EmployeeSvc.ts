
import axios, { AxiosResponse } from "axios";
import { IService } from "./IService";
import { Address } from "../comp/interfaces/Address";
import { AddressDataType } from "../comp/interfaces/AddressDataType";
export interface IEmployee  {
    empId: number,
    fName: string,
    lName: string,
    salary: number,
    grade: string,
    isContractor: boolean,
    homeAddress: AddressDataType,
    officeAddress: AddressDataType
}


const httpClient = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });


const EmployeeSvc: IService = {

    getAll():Promise<AxiosResponse<IEmployee[]>> {
        return httpClient.get('/emp/all');
    }
    ,
    deleteEmp(id:number): Promise<AxiosResponse<void>> {
        return httpClient.delete(`/emp/delete/${id}`);
    },
    addEmp(data:IEmployee):Promise<AxiosResponse<IEmployee>> {
        return httpClient.post('/emp/add',data);
    }

};

export default EmployeeSvc;