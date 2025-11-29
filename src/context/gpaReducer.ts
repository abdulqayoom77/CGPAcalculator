import { GPAActionType, type GPAAction, type GPAState } from "../types/types";

export const initialState: GPAState = {
  semesters: [],
  currentSemester: null,
  editMode: false,
};

export function gpaReducer(state: GPAState, action: GPAAction): GPAState {
  switch (action.type) {
    case GPAActionType.ADD_SEMESTER:
      return { ...state, semesters: [...state.semesters, action.payload] };
    case GPAActionType.SET_CURRENT:
      return { ...state, currentSemester: action.payload };
    case GPAActionType.SET_EDIT_MODE:
      return { ...state, editMode: action.payload };
    case GPAActionType.DELETE_SEMESTER:
      return {
        ...state,
        semesters: state.semesters.filter((s) => s.id !== action.payload),
      };
    default:
      return state;
  }
}
