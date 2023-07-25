import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTasksService } from 'src/app/services/get-tasks/get-tasks.service';
import { NewTaskToCreate } from '../../../../interfaces/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { GetListsService } from 'src/app/services/get-lists/get-lists.service';
import { List } from 'src/app/interfaces/list';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css'],
})
export class ProjectpageComponent {
  constructor(
    public route: ActivatedRoute,
    public getTasksService: GetTasksService,
    public getListsServce: GetListsService
  ) {}

  private draggedTask: any;
  
  projectId: string = '';
  mostrar: string = '';

  newTaskToCreate: NewTaskToCreate = {
    projectId: '',
    name: '',
    state: '',
    listId: ''
  };

  newList: boolean = false;
  nameList: string = '';
  listDivs: any = [];

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.projectId = value['id']
      this.getListsServce.getLists(this.projectId).subscribe((lists) => {
        const arrayOfList = lists.map(response => {
          return{
            _id: response._id,
            name: response.name,
            tasks: []
          }
        })
        this.listDivs = arrayOfList

        this.getTasksService.getAllTasks(this.projectId).subscribe((tasks) => {
          this.listDivs.forEach((list: any) => {
              tasks.forEach(task => {
                list.name === task.state && list.tasks.push(task)
              })
          })
        })
      })
    });
  }

  newTask(list: any) {
    this.mostrar = list.name;
    this.newTaskToCreate.state = list.name;
    this.newTaskToCreate.listId = list._id
  }

  createNewTask() {
    this.newTaskToCreate.projectId = this.projectId;
    this.getTasksService.createTask(this.newTaskToCreate).subscribe((response) => {
      this.listDivs.forEach((list: any) => {
        list.name === response.state && list.tasks.push(response)
      })
    }) 
  }

  drop(event: CdkDragDrop<NewTaskToCreate[]>, list: List) {
    const stateTask = {
      state: list.name,
      listId: list._id
    };
    this.getTasksService.updateTask(this.draggedTask._id, stateTask);
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDragStart(task: object) {
    this.draggedTask = task;
  }

  addNewList() {
    const newList = {
      projectId: this.projectId,
      name: this.nameList
    };
    this.getListsServce.createList(newList).subscribe((response) => {
      this.listDivs.push({...response, tasks: []})
    })

  }
}
