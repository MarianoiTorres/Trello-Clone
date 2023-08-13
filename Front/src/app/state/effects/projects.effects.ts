import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap,  mergeMap, catchError, tap } from 'rxjs/operators';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { loadProjects, loadProjectsRecently, projectsLoaded, projectsRecentlyLoaded } from '../actions/project.action';

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

  loadProjectsRecentlyViewed$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadProjectsRecently),
    exhaustMap(action =>
      this.projectService.getProjectsRecentlyViewed(action.projectsId).pipe(
        map((projects) => projectsRecentlyLoaded({projects})),
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
