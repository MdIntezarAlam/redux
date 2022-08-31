// ====================>>>>>>>>>>REDUX_DUCKS PATTERN================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//sab ko ek hi file mai esleye likhe ki ham different different file ko use karenge
//like task_1, task_2, task_3......
//step-one=>>>>>>>>>>>defin the action type
import { createAction } from "@reduxjs/toolkit";
const TASK_ADDED = "taskAdded";
const TASK_REMOVED = "taskRemoved";
console.log(createAction)
//step-two=>>>>>>>>>>>create the  Action Creators and it should be export as a function
//task added
export const taskAdded = ({ id, description, status }) => {
  return {
    type: TASK_ADDED,
    payload: {
      id: id,
      description: description,
      status: status,
    },
  };
};
//task deleted
export const taskDeleted = (id) => {
  return {
    type: TASK_REMOVED,
    payload: {
      id,
    },
  };
};

//step-three=>>>>>>>>>>>>>>>>>>>>crete reduceres
//Add the data
const reduceres = (state = [], action) => {
  if (action.type === TASK_ADDED) {
    return [
      ...state,
      {
        id: action.payload.id,
        description: action.payload.description,
        status: action.payload.status,
      },
    ];
  }
  //remove the data
  else if (action.type === TASK_REMOVED) {
    return state.filter((item) => {
      return item.id !== action.payload.id;
    });
  } else {
    return state;
  }
};

export default reduceres;
