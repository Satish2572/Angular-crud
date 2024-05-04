import { Component } from '@angular/core';
import { StudentService, StudentResponse } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  constructor(private studentService: StudentService) { }
  students!: StudentResponse[];
  studentId: number = 1;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList() {
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res: any) => {
      console.log(res, 'response');
      this.students = res;
      this.isLoading = false;
    });
  }

  deleteStudent(studentId: number) {
    if (confirm('Are you sure you want to delete this student')) {
      // event.target.innerText = 'Deleting....';

      this.isLoading = true;
      this.studentId = studentId;
      this.studentService.deleteStudentService(this.studentId).subscribe((res: any) => {
        this.getStudentsList();
        this.isLoading = false;
      });
    }
  }
}
