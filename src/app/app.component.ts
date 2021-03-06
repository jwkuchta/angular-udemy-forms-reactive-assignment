import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup
  statuses = ['Stable', 'Critical', 'Finished']

  ngOnInit() {
    this.form = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    })
  }

  // forbiddenName(control: FormControl): {[s: string]: boolean} {
  //   if (control.value === 'Test') return {'forbiddenName': true}
  // }

  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({'forbiddenName': true})
        } else {
          resolve(null)
        }
      },1500)
    })
    return promise
  }

  onSubmit(){
    console.log(this.form)
  }
}
