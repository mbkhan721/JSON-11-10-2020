import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { r1 } from '../products';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {

  resumeItems; 
  profile = r1.profile;
  workExpeience = r1.workExperience ;
  education = r1.education ;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.resumeItems = this.cartService.getResume();
  }

}