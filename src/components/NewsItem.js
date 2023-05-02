import React from "react";

export default function NewsItem (props) {
    return (
      <div>
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span  className="badge rounded-pill bg-danger">
           {props.source}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img
            src={
              !props.imageUrl
                ? "https://cdn.zeebiz.com/sites/default/files/2023/04/29/239643-vivox90ians.jpg"
                : props.imageUrl
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.discription}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!props.author ? "Unknown" : props.author} on{" "}
                {new Date(props.date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={props.newsUrl}
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
