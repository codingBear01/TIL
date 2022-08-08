const ksack = (val, weights, capa) => {
  let load = 0;
  let i = 0;
  let w = 0;

  while (load < capa && i < 4) {
    if (weights[i] <= capa - load) {
      w += val[i];
      load += weights[i];
    } else {
      let r = (capa - load) / weights[i];
      w += r * val[i];
      load += weights[i];
    }
    i++;
  }

  return w;
};

const val = [50, 140, 60, 60];
const weights = [5, 20, 10, 12];
const capa = 30;
const items = ['A', 'B', 'C', 'D'];

console.log(ksack(val, weights, capa));
