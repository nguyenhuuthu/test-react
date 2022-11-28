import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Result from "./Result";
class CharactersContainer extends Component {
  render() {
    let { result } = this.props;
    console.log("charactore ", result);
    return (
      <>
        <div className='container'>
          <div className='header'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png'
              alt='.'
            />
          </div>
        </div>
        <SearchBox />

        {result.map((item) => {
          return (
            <>
              <Result
                key={item.char_id}
                result={item}
              />
            </>
          );
        })}
      </>
    );
  }
}

export default CharactersContainer;
