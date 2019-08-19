import React, { Component } from "react";

class ReservationComponent extends Component {

  render() {

    const reservationList = [
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni corporis quibusdam, vero voluptate.
              Dolor recusandae ea officiis illum, consequatur, totam, sunt alias non esse nulla, aliquid doloribus sit
              fugit aspernatur!`,
      },
    ]

    return (
      <>
      <div className="page-content header-clear-medium">
      {reservationList.map((item, index) => {
        return (
          <div key={index} className="content">
            {item.content}
          </div>
        )
      })}
      </div>
      </>
    );
  }
}

export default ReservationComponent;
