import React, { Component } from "react";

class Result extends Component {
  render() {
    let { result } = this.props;
    // console.log(result);
    return (
      <>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img
                src={result.img}
                alt='.'
              />
            </div>
            <div className='flip-card-back'>
              <h1>hello</h1>
              <p>nick</p>
              <p>We love that guy</p>
            </div>
          </div>
          ;
        </div>
      </>
    );
  }
}

export default Result;
