import React, { Component } from "react";

class LikeComponent extends Component {

  render() {

    const saveList = [
      { 
        href: "store.html",
        img: "img/store1.jpg",
        favorite: "HOT",
        title_name: "NAME",
        content: "Lorem ipsum dolor sit amet consectetur ",
        star: [1,1,1,1,0],
        star1: 3,
        gray: 308,
      },
      { 
        href: "store.html",
        img: "img/store2.jpg",
        favorite: "HOT",
        title_name: "NAME",
        content: "Lorem ipsum dolor sit amet consectetur ",
        star: [1,1,1,1,0],
        star1: 3,
        gray: 291,
      },
      { 
        href: "#",
        img: "img/store3.jpg",
        favorite: "",
        title_name: "NAME",
        content: "Lorem ipsum dolor sit amet consectetur ",
        star: [1,1,1,0,0],
        star1: 3,
        gray: 51,
      },
    ]

    return (
      <>
      <div className="page-content header-clear-medium color-white">
        <div className="content-title">
          <p>SAVE LIST</p>
        </div>
        {saveList.map((item, index) => {
          return (
            <div key={index} className="caption">
              <a className="caption-one" href={item.href}>
                <div className="caption-img">
                  <img className="caption-img-keeper" src={item.img} alt=""/>
                  <span className="caption-like"><i className="fa fa-heart"></i></span>
                </div>
                <div className="caption-body">
                  <h3 className="caption-title">{item.favorite.length > 0 && <span className="favorite">{item.favorite}</span>}{item.title_name}</h3>
                  <p className="caption-content">{item.favorite}</p>
                  <p className="caption-rating">
                    {item.star.map((item, index) => {
                      if (item === 1) {
                        return (
                          <i key={index} className="fas fa-star"></i>
                        )
                      }
                      return (
                        <i key={index} className="far fa-star"></i>
                      )
                    })}
                    <strong className="color-gray">{item.gray}</strong>
                  </p>
                </div>
              </a>
            </div>
          )
        })}
        </div>
      </>
    );
  }
}

export default LikeComponent;
