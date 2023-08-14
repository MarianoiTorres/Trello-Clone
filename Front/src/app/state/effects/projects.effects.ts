import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap,  mergeMap, catchError, tap } from 'rxjs/operators';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { addProject, createNewProject, loadProjects, projectsLoaded} from '../actions/project.action';

@Injectable()
export class ProjectEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjects),
      exhaustMap(action =>
        this.projectService.getProjects(action.userId).pipe(
          map((projects) => projectsLoaded({projects})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addProject$ = createEffect(() =>
  this.actions$.pipe(
    ofType(createNewProject),
    exhaustMap(action =>
      this.projectService.createProject(action.project).pipe(
        map((project) => addProject({project})),
        catchError(() => EMPTY)
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private projectService: GetProjectsService
  ) {}
}
