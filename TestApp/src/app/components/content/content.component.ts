import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  arrayDeAlumnos: Array<string> = ["Harry", "Hermione", "Ron", "Draco", "Ginny", "Fred", "George"]
  constructor() { 
  }

  ngOnInit(): void {
  }


}
