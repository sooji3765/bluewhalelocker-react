import React, { Component } from "react";

import ChattingComponent from './ChattingComponent';

class ChatComponent extends Component {

  constructor(props) {
    super(props);
    this.handleChatting = this.handleChatting.bind(this);
  }

  state = {
    selected: null
  };

  handleChatting = (e, item) => {
    e.preventDefault();
    this.setState({
      selected: item
    });
  };

  render = () => {

    const chatList = [
      {
        href: "#",
        img: "img/user1.png",
        user_name: "USER1",
        content: "Hello?",
        time: "04:11 pm",
        count: "2",
      },
      {
        href: "#",
        img: "img/user2.png",
        user_name: "USER3",
        content: "Are you booking our locker system?",
        time: "04:11 pm",
        count: "2",
      },
      {
        href: "#",
        img: "img/user3.png",
        user_name: "USER2",
        content: "Hi ~~!",
        time: "05:00 pm",
        count: "1",
      },
      {
        href: "chatting.html",
        img: "img/user2.png",
        user_name: "USER5",
        content: "Are you booking our locker system?",
        time: "04:11 pm",
        count: "2",
      },
      {
        href: "#",
        img: "img/user4.png",
        user_name: "USER6",
        content: "Hello?",
        time: "07:00 pm",
        count: "5",
      },
  
    ]    
    return (
      <>
      {!this.state.selected &&
      <div className="page-content header-clear-medium color-white">
        
        <ul className="chat-list">
        {chatList.map((item, index) => {
          return (
          <li key={index} className="chat-item">
            <a href={item.href} onClick={(e) => this.handleChatting(e, item)}>
              <div className="item-img">
                <img className="img-user" src={item.img} alt=""/>
              </div>
              <div className="item-body">
                <span className="user-name">{item.user_name}</span>
                <p className="item-chat-content">{item.content}</p>
              </div>
              <div className="item-detail">
                <span className="chat-time">{item.time}</span>
                <span className="chat-count">{item.count}</span>
              </div>
            </a>
          </li>
          )
        })}
        </ul>
      </div>
      }
      {this.state.selected &&
      <ChattingComponent {...this.state}></ChattingComponent>
      }
      </>
    );
  };
}

export default ChatComponent;
