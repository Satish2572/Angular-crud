import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse{
  id: number
  name: string
  email: string
  phone: number
  course : string
}

export interface StudentResponseType{
  students:StudentResponse[];
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  saveStudentService(inputData: any){
    return this.httpClient.post(`http://localhost:3000/student`, inputData);
  }

  getStudents(){
    return this.httpClient.get<StudentResponseType>(`http://localhost:3000/student`);
  }

  getSingleStudent(studentId:any){
    return this.httpClient.get(`http://localhost:3000/student/${studentId}`);
  }

  updateStudentService(studentId:any, inputData: any){
    return this.httpClient.put(`http://localhost:3000/student/${studentId}`, inputData);
  }

  deleteStudentService(studentId:any){
    return this.httpClient.delete(`http://localhost:3000/student/${studentId}`);
  }
}
