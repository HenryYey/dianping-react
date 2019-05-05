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
import  *as HomeActions  from "../../redux/actions/home";

class Home extends Component {
  componentDidMount() {
    // this.props.HomeActions.getDiscounts();
  }
  loadMore = () => {
    this.props.HomeActions.getLikes()
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
        <List  data2 = {likes} getLikes={this.loadMore}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    likes: state.home.likes,
    discounts: state.home.discounts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    HomeActions: bindActionCreators(HomeActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
