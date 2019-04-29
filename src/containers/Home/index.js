import React, { Component } from 'react';
import Category from './components/Category'
import Headline from './components/Headline'
import Banner from './components/Banner'
import HomeHeader from './components/HomeHeader'
import Discount from './components/Discount'
import List from './components/List'
import Footer from '../../components/Footer'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// 加载actions
import {
  actions,
  getLikes,
  getDiscounts,
} from "../../redux/modules/home";
class Home extends Component {
  componentDidMount() {
    this.props.actions.getDiscounts();
  }
  loadMore() {
    this.props.actions.getLikes()
  }
  render() {
    const {likes, discounts} = this.props
    return (
      <div className="container">
        <HomeHeader />
        <Banner />
        <Headline/>
        <Category/>
        <Discount  data = {discounts}/>
        <List  data = {likes} getLikes={this.loadMore}/>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    likes: actions.getLikes(state),
    discounts: actions.getDiscounts(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
