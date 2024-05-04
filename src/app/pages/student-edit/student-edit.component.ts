import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  student!:any;
  studentId!:any;

  loadingTitle: string = 'Loading.....';
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private studentService: StudentService){}

  ngOnInit() {
    this.isLoading = true;
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getSingleStudent(this.studentId).subscribe((res:any) =>{
      this.student = res;
      this.isLoading = false;
    });
  }

  updateStudent(){
    this.isLoading = true;
    var inputData = {
      name: this.student.name,
      email: this.student.email,
      phone: this.student.phone,
      course: this.student.course
    }

    this.studentService.updateStudentService(this.studentId, inputData).subscribe({
      next: (res :any) =>{
        alert('Student updated successfully');
        this.isLoading = false;
      },
      error: (err :any) => {
        console.log(err,'error');
      }
    })
  }
}
