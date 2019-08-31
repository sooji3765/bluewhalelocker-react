import React, { Component } from "react";

class ChattingComponent extends Component {

  constructor(props) {
    super(props);
    this.setState({
      ...props
    });
  }

  chatter = {
    me: {
      say: "bubble bubble-right color-blue",
      time: "speech-read bubble-right bg-clear",
    },
    you: {
      say: "bubble bubble-left color-blue",
      time: "speech-read bubble-left bg-clear",
    },
  }

  render() {

    const chattingList = [
      {
        chatter: "me",
        say: "hello ~~~?",
        time: "07:18 PM",
      },
      {
        chatter: "you",
        say: "hello ~~~?",
        time: "07:18 PM",
      },
      {
        chatter: "you",
        say: "hello ~~~?",
        time: "",
      },
      {
        chatter: "you",
        say: "hello ~~~?",
        time: "07:18 PM",
      },
      {
        chatter: "me",
        say: "gooaashdkfahsdkfj aksjdfhkajshdfkjhas asdhfk",
        time: "07:18 PM",
      },
      {
        chatter: "me",
        say: "hello ~~~?",
        time: "07:18 PM",
      },
      {
        chatter: "me",
        say: "hello ~~~?",
        time: "07:18 PM",
      },
      {
        chatter: "me",
        say: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus asperiores dolorum inventore esse, officiis totam in ea harum laborum, suscipit culpa. Odio repellendus commodi sunt delectus! Tempore fugit et nesciunt.`,
        time: "07:18 PM",
      },
    ]   
    
    return (
      <>
      <div className="page-content header-clear-medium">
      {chattingList.map((item, index) => {
        return (
          <div key={index} className="content">
            <div className={this.chatter[item.chatter].say}>
              {item.say}
            </div>
            <em className={this.chatter[item.chatter].time}>{item.time}</em>
            <div className="clear"></div>
          </div>
        )})}

        <div className="input-content">
          <button className="btn-chat"><i className="fas fa-plus-circle"></i></button>
          <input type="text" name="" id=""/>
          <button className="btn-chat btn-right"><i className="far fa-arrow-alt-circle-right"></i></button>
        </div>
      </div>      
      </>
    );
  }
}

export default ChattingComponent;
