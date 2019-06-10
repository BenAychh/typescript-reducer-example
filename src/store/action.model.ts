// I never know where to put this and a lot of my flux libraries have it

export interface IAction {
  readonly type: string;
  payload?: any;
}
