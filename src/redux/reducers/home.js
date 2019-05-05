import { combineReducers} from "redux"

const initialState = {
  likes: {
    perPage: 0,
    pageSize: 5,
    goods: [],
    isGetting: false,
    fail: false
  },
  discounts: {
    fail: false,
    goods: []
  }
};
//猜你喜欢reducer
const likes = (state = initialState.likes, action) => {
  switch (action.type) {
    case "GET_LIKES_SUCCESS":
      return {
        type:  "GET_LIKES_SUCCESS",
        ...state,
        pageCount: state.pageSize*(state.perPage+1),
        goods: state.goods.concat(action.response.data.goods)
      }
    case "GET_LIKES_FAIL":
      return {
        type: "GET_LIKES_FAIL",
        ...state,
        fail: true
      }
    default:
      return state
  }
}
//特惠商品reducer
const discounts = (state = initialState.discounts, action) => {
  switch(action.type) {
  case "GET_DISCOUNTS_SUCCESS":
    return {
      type: "GET_DISCOUNTS_SUCCESS",
      ...state,
      goods: action.response.goods
    };
  case "GET_DISCOUNTS_FAIL":
    return {
      type:  "GET_DISCOUNTS_FAIL",
      ...state,
      fail: true
    };
  default:
    return state;
  }
};

const reducer = combineReducers({
  discounts,
  likes
})
export default reducer