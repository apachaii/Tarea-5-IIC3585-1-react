import React from "react";

const TITLE_HEIGHT = 500;
const TITLE_WIDTH = 500;

function TitleScreen() {
  return (
    <div
      style={{
        height: TITLE_HEIGHT,
        width: TITLE_WIDTH,
        margin: "0px auto ",
      }}
    >
      <h1>Car vs Dogs</h1>
      <h2>React Edition</h2>
      <p>Press [z] or [x] to start</p>
    </div>
  );
}

export default TitleScreen;