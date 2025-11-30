export interface Subject {
  id: string;
  name: string;
  marks: number;
  totalMarks: number;
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

export type GPAState = {
  semesters: Semester[];
  currentSemester: Semester | null;
  editMode: boolean;
};

export enum GPAActionType {
  ADD_SEMESTER = "ADD_SEMESTER",
  SET_CURRENT = "SET_CURRENT",
  SET_EDIT_MODE = "SET_EDIT_MODE",
  DELETE_SEMESTER = "DELETE_SEMESTER",
}

export type GPAAction =
  | { type: GPAActionType.ADD_SEMESTER; payload: Semester }
  | { type: GPAActionType.SET_CURRENT; payload: Semester | null }
  | { type: GPAActionType.SET_EDIT_MODE; payload: boolean }
  | { type: GPAActionType.DELETE_SEMESTER; payload: string };

export type GPAContextType = {
  state: GPAState;
  dispatch: React.Dispatch<GPAAction>;
};

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};
