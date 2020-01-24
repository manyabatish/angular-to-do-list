import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  eventadd=" ";
  events = [];

  onAdd()
  {
  this.eventadd= this.eventadd;
  if(this.eventadd !=" ")
  {
this.events.push(this.eventadd);
this.eventadd= " ";
}
else 
{
	this.eventadd = " ";
}
  }
  onDelete(myTask)
  {
this.events.splice(myTask,1);
  }
  }
