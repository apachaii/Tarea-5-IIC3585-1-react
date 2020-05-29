import one from "./1";

const levels = {
  1: one,
}

function get_level(level_number) {
  return levels[level_number];
}


export default get_level;