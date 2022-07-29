import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnClick()
  {
    this.router.navigateByUrl('/about')
  }

  btnClick1()
  {
    this.router.navigateByUrl('')
  }

  skills(){
    this.router.navigateByUrl('/skills')
  }

  education()
  {
    this.router.navigateByUrl('/education')
  }

  projects()
  {
    this.router.navigateByUrl('/projects')
  }
}
