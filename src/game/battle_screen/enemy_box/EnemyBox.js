import React from "react";
import {ReactComponent as Dog} from "../../../assets/pet-bottle.svg";
import {
  BATTLE_BOX_HEIGHT,
  BATTLE_BOX_VERTICAL_POSITION,
  BATTLE_BOX_WIDTH,
  ENEMY_VERTICAL_POSITION
} from "../battle_constants";
import PropTypes from "prop-types";

const dogImageStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
}

class EnemyBox extends React.Component {

  state = {
    successful_fetch: false,
    image_source: null,
  }

  componentDidMount() {
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

          position: "absolute",
          marginTop: BATTLE_BOX_VERTICAL_POSITION,
          marginLeft: ENEMY_VERTICAL_POSITION,
        }}
      >
        {DogImage}
        <div
          style={{
            bottom: 0,
            background: "white",
            position: "absolute",
          }}
        >
          <p style={{margin: 0}}>
            {`${this.props.enemy_life}/${this.props.enemy_total_life}`}
          </p>
        </div>
      </div>
    );
  }
}

EnemyBox.propTypes = {
  enemy_life: PropTypes.number.isRequired,
  enemy_total_life: PropTypes.number.isRequired,
};

export default EnemyBox;