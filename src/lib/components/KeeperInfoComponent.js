import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class KeeperInfoComponent extends Component {
  render() {
    return (
      <>
        <div className="page-content header-clear-medium">
 
          <div className="keeper-info-page">
            <div className="keeper-photo-content">
             <img className="keeper-photo" src="../img/store1.jpg" alt="store_img"  />
            </div>
            
            <div className="keeper-info-content">
              <div className="keeper-info-profile">
                <div className="keeper-name">
                <div className="keeper-names">HAYONG Cafe</div>
                <div className="keeper-info-score-div">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <span className="keeper-info-use">230</span>
                </div>
                </div>
                <img className="keeper-profile-img" src ="../img/user1.png" alt="keeper-profile"/> 
              </div>

              <div className="use-locker-now">
                  사용 가능한 락커 수 : 4
              </div>

              <div className="btn-group" >
              <ButtonGroup fullWidth aria-label="full width outlined button group">
                <Button>Reservation</Button>
                <Button>Message</Button>
              </ButtonGroup>
              </div>

              <div className="keeper-info-detail">
                <div className="keeper-info-div">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div> 
                  <div className="info-detail">
                    010-0000-0000
                  </div>
                </div>
                <div className="keeper-info-div">
                  <div className="info-icon">
                  <i className="fas fa-map-marked-alt"></i>
                  </div> 
                  <div className="info-detail">
                    서울시 어쩌구 ~~~~
                  </div>
                </div>
                <div className="keeper-info-div">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div> 
                  <div className="info-detail">
                    010-0000-0000
                  </div>
                </div>
              </div>

              <div className="keeper-location">
                Map
              </div>
              <div className="keeper-review">
                 <div className="review-title">
                    REVIEW 240
                </div>
                <ul className="review-cotent">
                  <li className="review-item">
                    <div className="review-writer">
                        <img className="review-writer-img" src="../img/user2.png" alt="review-user1"/>
                        <div className="review-writer-info">
                          <p className="review-writer-name">HONG ..</p>
                          <p className="review-write-date">2019.08.23</p>
                        </div> 
                    </div>
                    <div className="review-in">
                      위치가 너무 좋아요
                    </div>
                  </li>
                  <li className="review-item">
                    <div className="review-writer">
                        <img className="review-writer-img" src="../img/user1.png" alt="review-user1"/>
                        <div className="review-writer-info">
                          <p className="review-writer-name">HONG ..</p>
                          <p className="review-write-date">2019.08.23</p>
                        </div> 
                    </div>
                    <div className="review-in">
                      위치가 너무 좋아요
                    </div>
                  </li>
                  <li className="review-item">
                    <div className="review-writer">
                        <img className="review-writer-img" src="../img/user2.png" alt="review-user1"/>
                        <div className="review-writer-info">
                          <p className="review-writer-name">HONG ..</p>
                          <p className="review-write-date">2019.08.23</p>
                        </div> 
                    </div>
                    <div className="review-in">
                      위치가 너무 좋아요
                    </div>
                  </li>
                  <li className="review-item">
                    <div className="review-writer">
                        <img className="review-writer-img" src="../img/user2.png" alt="review-user1"/>
                        <div className="review-writer-info">
                          <p className="review-writer-name">HONG ..</p>
                          <p className="review-write-date">2019.08.23</p>
                        </div> 
                    </div>
                    <div className="review-in">
                      위치가 너무 좋아요
                    </div>
                  </li>
                  <li className="review-item">
                    <div className="review-writer">
                        <img className="review-writer-img" src="../img/user3.png" alt="review-user1"/>
                        <div className="review-writer-info">
                          <p className="review-writer-name">HONG ..</p>
                          <p className="review-write-date">2019.08.23</p>
                        </div> 
                    </div>
                    <div className="review-in">
                      위치가 너무 좋아요
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default KeeperInfoComponent;
