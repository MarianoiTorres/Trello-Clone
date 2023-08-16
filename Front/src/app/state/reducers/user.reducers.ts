import { createReducer, on } from "@ngrx/store";
import { UserState } from "src/app/models/states/User.state";
import { userLoaded } from "../actions/user.action";

export const initialState: UserState = {loading: false, user: []}

export const userReducer = createReducer(
    initialState,
    on(userLoaded, (state, {user}) => {
        return {...state, loading: true, user}
    })
)