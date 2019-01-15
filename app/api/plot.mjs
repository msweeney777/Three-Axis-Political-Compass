const max_values = {
  x: 90,
  y: 84,
  z: 63,
}

function normalize(score) {
  const [key, val] = Object.entries(score)[0];
  const max = max_values[key];
  const index_value = parseInt (val) / max * 100;
  return Math.floor(index_value);
}

function plotOld(raw_scores) {
  let stash = [];
  for (let i = 0; i < raw_scores.length(); i++){
    let score = normalize(raw_scores[i]);
    stash.push(score);
  }
  return stash;
}

function plot(raw_scores) {
  return raw_scores.map(normalize);
};

function handler(req, res){
  const result = plot(req.body);
  res.json(result);
}

export default handler;
