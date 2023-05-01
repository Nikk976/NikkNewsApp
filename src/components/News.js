import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
      pageSize:5,
      country:'in',
      category:'general'
  }
  static propTypes = {
       pageSize:PropTypes.number,
       category:PropTypes.string,
        country:PropTypes.string,
  }
    
    constructor() {
        super();
        console.log("Hello Iam a constructor");
        this.state = {
            articles:[],
            loading:true,
            page:1,
            totalResult:""
        }
    }

    async componentDidMount() {
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15e073cf457f49f0b586d8aee12282ca&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles, totalResult:parsedData.totalResults, loading:false});
      
    }

    handleNextClick = async ()=>{
      if(!(this.state.page+1 > Math.ceil(this.state.totalResult/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15e073cf457f49f0b586d8aee12282ca&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false,
      })
    }
    }

    handlePreviousClick = async()=>{
      
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15e073cf457f49f0b586d8aee12282ca&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false,
    })
    }

  render() {
   
   
    return (
        
        <div className="container my-3" >
            <h1 className="text-center my-3">NewsMonkey - Headlines</h1>
            {this.state.loading && <Spinner />}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.url}>
                 <NewsItem title={element.title?element.title.slice(0,66):""} discription={element.description?element.description.slice(0,69):""}imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date={element.publishedAt} source = {element.source.name}  />
                 </div>
            })}
            </div>
            <div className="container my-3 d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" onClick={this.handlePreviousClick} className="btn btn-dark">&laquo; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &raquo;</button>
            </div>
      </div>
    )
  }
}
