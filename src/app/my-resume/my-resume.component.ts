import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { r1 } from '../products';
import { r2 } from '../products';
import { r3 } from '../products';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})

 export class MyResumeComponent implements OnInit {
  profile = r1.profile;
  workExpeience = r3.workExperience;
  education = r2.education;
  constructor() { }

  ngOnInit() {
  }

}