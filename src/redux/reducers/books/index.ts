import { AnyAction } from "redux";

import { INIT_STATE, INIT_STATE_FALSE } from "../../actions/books/types";

interface Books {
  id: number;
  name: string;
  located: boolean;
}

const initialState = {
  book: false,
};

export const booksReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INIT_STATE: {
      return { ...state, book: true };
    }
    case INIT_STATE_FALSE: {
      return { ...state, book: false };
    }
    default: {
      return state;
    }
  }
};
