import React, { Component } from 'react'
import './index.less'
import ListItem from './ListItem'
import Loading from "../../../../components/Loading"

const dataSource = [
  {
    id: "p-1",
    shopId: "s-1",
    shop: "院落创意菜",
    tag: "免预约",
    picture:
      "https://p0.meituan.net/deal/e6864ed9ce87966af11d922d5ef7350532676.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0",
    product: "「5店通用」百香果（冷饮）1扎aaaaaaaaaaaaaaaaaaa",
    currentPrice: 19.9,
    oldPrice: 48,
    sales: "已售6034"
  },
  {
    id: "p-2",
    shopId: "s-2",
    shop: "正一味",
    tag: "免预约",
    picture:
      "https://p0.meituan.net/deal/4d32b2d9704fda15aeb5b4dc1d4852e2328759.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0",
    product: "[51店通用] 肥牛石锅拌饭+鸡蛋羹1份",
    currentPrice: 29,
    oldPrice: 41,
    sales: "已售15500"
  },
  {
    id: "p-3",
    shopId: "s-3",
    shop: "Salud冻酸奶",
    tag: "免预约",
    picture:
      "https://p0.meituan.net/deal/b7935e03809c771e42dfa20784ca6e5228827.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0",
    product: "[28店通用] 冻酸奶（小杯）1杯",
    currentPrice: 20,
    oldPrice: 25,
    sales: "已售88719"
  },
  {
    id: "p-4",
    shopId: "s-4",
    shop: "吉野家",
    tag: "免预约",
    picture:
      "https://p0.meituan.net/deal/63a28065fa6f3a7e88271d474e1a721d32912.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0",
    product: "吉汁烧鱼+中杯汽水/紫菜蛋花汤1份",
    currentPrice: 14,
    oldPrice: 23.5,
    sales: "已售53548"
  },
  {
    id: "p-5",
    shopId: "s-5",
    shop: "醉面 一碗醉香的肉酱面",
    tag: "免预约",
    picture:
      "https://p1.meituan.net/deal/a5d9800b5879d596100bfa40ca631396114262.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0",
    product: "[7店通用] 单人套餐",
    currentPrice: 17.5,
    oldPrice: 20,
    sales: "已售23976"
  }
];

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: dataSource,
      loadTimes: 1,
      remove: false
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    let remove = this.state.remove
    if(this.state.loadTimes >=3 && !remove) {
      document.removeEventListener("scroll", this.handleScroll);
      remove = true;
    }
  }

  componentWillUnmount() {
    if(!this.state.remove) {
      document.removeEventListener("scroll", this.handleScroll)
    }
  }

  // 处理屏幕滚动事件，实现加载更多的效果
  handleScroll = () => {
    // 滚动高度
    let data = this.state.data
    const scrollTop = document.documentElement.scrollTop 
    || document.body.scrollTop
    // 视窗高度
    const screenHeight = document.documentElement.clientHeight
    //list距离顶部的偏移量 每个listItem121px
    const offsetTop = document.getElementById("list").offsetTop;
    const listHeight = 121*data.length-(screenHeight -  offsetTop)
    // 相当于滚到底部刷新

    if(scrollTop >= listHeight)
    /**
     * todo
     * 去服务器加入新资源
     */
    {
      // 延迟效果
      const NowData =data.concat(dataSource)
      const NowLoadTimes = this.state.loadTimes+1
      setTimeout(() => {
        this.setState({
          data:NowData,
          loadTimes: NowLoadTimes
        })
      }, 1000);
    }
  }

  render() {
    let data = this.state.data
    let loadTimes = this.state.loadTimes
    return (
      <div className="list" id="list">
        <div className="like">猜你喜欢</div>
        {
          data.map((item,i) => {
            return (
              <ListItem data={item} key={i}/>
            )
          })
        }
        {
          loadTimes < 3 ? (
            <Loading/>
          ): (
            <div className="viewmore">
              <span className="more">
                查看更多
              </span>
            </div>
          )
        }
      </div>
    )

  }
}
