import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {

  constructor(private studentService: StudentService) { }

  name!: string;
  email!: string;
  phone!: string;
  course!: string;

  loadingTitle: string = 'Loading.....';
  isLoading: boolean = false;

  saveStudent(){
    this.loadingTitle = 'Saving.....';
    this.isLoading = true;
    var inputData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      course: this.course
    }

    this.studentService.saveStudentService(inputData).subscribe({
      next: (res :any) =>{
        console.log(res,'response');
        this.name = '';
        this.email = '';
        this.phone = '';
        this.course = '';

        this.isLoading = false;
      },
      error: (err :any) => {
        console.log(err,'error');
        this.isLoading = false;
      }
    })
  }
}
