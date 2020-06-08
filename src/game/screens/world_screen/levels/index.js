import one from "./1";
import two from "./2";
import three from "./3";
import four from "./4";
import five from "./5";

const levels = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
}

function get_level(level_number) {
  return levels[level_number];
}

export default get_level;