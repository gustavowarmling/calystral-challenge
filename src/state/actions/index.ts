import { ActionType } from '../action-types';

interface UpdateEmailAction {
  type: ActionType.UPDATE;
  payload: string;
}

export type Action = UpdateEmailAction;
