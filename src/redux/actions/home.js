import http from '../../utils/http'
  //获取猜你喜欢请求
export const GET_LIKES_SUCCESS = "GET_LIKES_SUCCESS"
export const GET_LIKES_FAIL =  "GET_LIKES_FAIL"
  //获取超值特惠请求
export const GET_DISCOUNTS_SUCCESS = "GET_DISCOUNTS_SUCCESS"
export const GET_DISCOUNTS_FAIL = "GET_DISCOUNTS_FAIL"

export const getLikes = () => (dispatch,getState) => {
    const { pageSize,perPage } = getState().home.likes;
      http.get("/getLikes",{perPage,pageSize}).then((res) => {
        console.log(res)
       dispatch({
          response: res.data,
          type: GET_LIKES_SUCCESS
        })
      }).catch((err)=> {
        dispatch({
          type: GET_LIKES_FAIL
        })
      })
    
  }
  //加载特惠商品
  export const getDiscounts = () => (dispatch,getState) => {
      http.get("/getLikes",{perPage:1,pageSize:5}).then((res) => {
          dispatch({
            response:res.data,
            type: GET_DISCOUNTS_SUCCESS
          })
        }).catch((err)=> {
          dispatch({
            type: GET_DISCOUNTS_FAIL
          })
      })
    }

