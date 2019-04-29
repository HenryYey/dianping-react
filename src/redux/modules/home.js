import { combineReducers} from "redux"
import http from '../../utils/http'

  //获取猜你喜欢请求
const GET_LIKES_SUCCESS = "GET_LIKES_SUCCESS"
const GET_LIKES_FAIL = "GET_LIKES_FAIL"
  //获取超值特惠请求
const GET_DISCOUNTS_SUCCESS = "GET_DISCOUNTS_SUCCESS"
const GET_DISCOUNTS_FAIL = "GET_DISCOUNTS_FAIL"

const initialState = {
  likes: {
    perPage: 0,
    pageSize: 5,
    goods: [],
    fail: false
  },
  discounts: {
    fail: false,
    goods: []
  }
};

export const actions = {
  //加载猜你喜欢的数据
  getLikes: () => {
    return (dispatch, getState) => {
      const { pageSize,perPage } = getState().home.likes;
      http.get("https://www.baidu.com",{perPage,pageSize}).then((res) => {
        console.log("?")
        dispatch(likes(res.data,GET_LIKES_SUCCESS))
      }).catch((err)=> {
        console.log("加载猜你喜欢")
        // dispatch(likes(err.data,GET_LIKES_FAIL))
      })
    };
  },
  //加载特惠商品
  getDiscounts: () => {
    console.log('getDiscounts')
    return (dispatch, getState) => {
      http.get("https://www.baidu.com",{}).then((res) => {
          console.log(res)
          dispatch(discounts(res.data,GET_DISCOUNTS_SUCCESS))
        }).catch((err)=> {
          console.log("加载特惠商品")
          // dispatch(discounts(err.data,GET_DISCOUNTS_FAIL))
        })
    }
  }
}

//猜你喜欢reducer
const likes = (state = initialState.likes, action) => {
  switch (action.type) {
    case GET_LIKES_SUCCESS:
      return {
        type: action,
        ...state,
        pageCount: state.pageSize*(state.perPage+1),
        goods: state.goods.concat(action.response.goods)
      }
    case GET_LIKES_FAIL:
      return {
        type: action,
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
  case GET_DISCOUNTS_SUCCESS:
    return {
      ...state,
      goods: action.response.goods
    };
  case GET_DISCOUNTS_FAIL:
    return {
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

export default reducer;