
//step-one=>>>>>>>>>>>defin the action type
const TASK_TWO_ADDED = "taskTwoAdded";
const TASK_TWO_DELETED = "taskTwoDeleted";

//step-two=>>>>>create the action creatersa and it should be export as a functions
export const taskTwoAdded = ({ id, desc, sttus }) => {
  return {
    type: TASK_TWO_ADDED,
    payload: {
      id: id,
      desc: desc,
      status: sttus,
    },
  };
};
export const taskTwoDeleted = (id) => {
  return {
    type: TASK_TWO_DELETED,
    payload: {
      id: id,
    },
  };
};

//step-three=>>>>>>>>>>>>>>>>>>>>create reducere
const reducere = (state = [], action) => {
  if (action.type === TASK_TWO_ADDED) {
    return [
      ...state,
      {
        id: action.payload.id,
        desc: action.payload.desc,
        status: action.payload.status,
      },
    ];
  } else if (action.type === TASK_TWO_DELETED) {
    return state.filter((item) => {
      return item.id !== action.payload.id;
    });
  } else {
    return state;
  }
};

export default reducere;
