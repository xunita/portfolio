import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {

  projects = [{
    name: "My portfolio",
    description: "Another portfolio made with Angular",
    image: "/assets/images/yaya.png",
    link: "/"
  }]

  index = 0

  length = [0]

  constructor() {
    this.length = this.projects.map((x, i) => i);
  }

  ngOnInit(): void {
  }

  setProject(val: number) {
    this.index = this.projects[val] ? val : 0
  }

  increment(val: number) {
    val++
    this.setProject(val)
  }
  decrement(val: number) {
    val--
    if (val === -1)
      val = this.length.length - 1
    this.setProject(val)
  }


}
