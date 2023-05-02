import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span  className="badge rounded-pill bg-danger">
           {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://cdn.zeebiz.com/sites/default/files/2023/04/29/239643-vivox90ians.jpg"
                : imageUrl
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
