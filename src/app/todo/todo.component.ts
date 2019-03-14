import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  
})
export class TodoComponent implements OnInit {
  newToDo='';
  toDoCount = 0;

  constructor() { }

  ngOnInit() {
  }

  onkeyup(e){
    console.log(this.newToDo);

    if (this.newToDo != ''){
      // increment counter
      this.toDoCount ++;

      // create a new list element with the new to do entered as content
      let toDoElement = document.createElement("li");
      toDoElement.innerHTML = this.newToDo;
      document.getElementById('toDos').appendChild(toDoElement);

      // 2 way binding, clear the variable and the input
      this.newToDo = '';
    }

    // change the text of the list state if the number of to dos > 0
    if (this.toDoCount > 0){
      document.getElementById('listState').innerText = 'Your to do list for now:';
    }
  }
}
