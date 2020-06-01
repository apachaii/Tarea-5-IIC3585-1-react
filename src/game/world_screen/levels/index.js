import one from "./1";
import two from "./2"

const levels = {
  1: one,
  2: two,
}

function get_level(level_number) {
  return levels[level_number];
}

export default get_level;