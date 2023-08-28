import { createReducer, on } from '@ngrx/store';
import { UserState } from 'src/app/models/states/User.state';
import { clearUserState, loadProjectId, removeProjectRecentlyView, userLoaded } from '../actions/user.action';

export const initialState: UserState = {
  loading: false,
  user: {
    projectsRecentlyView: [],
  },
};

export const userReducer = createReducer(
  initialState,
  on(userLoaded, (state, { user }) => {
    return { ...state, loading: true, user };
  }),
  on(loadProjectId, (state, { projectId }) => {
    const updatedProjectsRecentlyView = [...state.user.projectsRecentlyView];

    if (updatedProjectsRecentlyView.length >= 3) {
      updatedProjectsRecentlyView.shift();
    }

    updatedProjectsRecentlyView.push(projectId);

    const updatedUser = {
      ...state.user,
      projectsRecentlyView: updatedProjectsRecentlyView,
    };

    return { ...state, user: updatedUser };
  }),
  on(clearUserState, (state) => {
    return {...state, user: []}
  }),
  on(removeProjectRecentlyView, (state, {projectId}) => {
    console.log(state.user);
    const user = { ...state.user }

    user.projectsRecentlyView = user.projectsRecentlyView.filter((project: any) => project !== projectId)
    console.log(state.user);
    
    return {...state, user}
  })
);
