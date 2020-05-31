import React from "react";
import {
  BATTLE_BOX_HEIGHT,
  BATTLE_BOX_WIDTH,
  BATTLE_BOX_VERTICAL_POSITION,
  ENEMY_VERTICAL_POSITION
} from "../battle_constants";

import {ReactComponent as Dog} from "../../../assets/pet-bottle.svg"

const dogImageStyle = {
  width: "100%",
  height: "100%",
}

class EnemyBox extends React.Component {

  state = {
    successful_fetch: false,
    image_source: null,
  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random', {
      method: 'GET',
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const pic = JSON.parse(data);
        this.setState({
          successful_fetch: pic.status === "success",
          image_source: pic.message,
        })
      })
  }

  render() {
    let DogImage = (
      <Dog
        style={dogImageStyle}
      />
      ); // taken from here https://es.wikipedia.org/wiki/Archivo:Dog.svg
    if (this.state.successful_fetch) {
      DogImage = (
        <img
          src={this.state.image_source}
          alt={"A dog's Image"}
          style={dogImageStyle}
        />
        )
    }
    return (
      <div
        style={{
          width: BATTLE_BOX_WIDTH,
          height: BATTLE_BOX_HEIGHT,

          marginTop: BATTLE_BOX_VERTICAL_POSITION,
          marginLeft: ENEMY_VERTICAL_POSITION,

          position: "absolute",
        }}
      >
        {DogImage}
      </div>
    );
  }
}

export default EnemyBox;