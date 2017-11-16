// :: map (fn, xs) -> f
const map = (f) => (array) => array.map(f);
// :: filter (fn, xs) -> f
const filter = (f) => (array) => array.filter(f);
// :: reduce (fn, xs) -> f
const reduce = (f) => (array) => array.reduce(f);
// :: range [x] -> [xs]
const range = (x) => [...Array(x).keys()];
// compose :: ([...fs]) -> fn
const compose = (...fs) => fs.reduce((f, g) => (...args) => f(g(...args)));
// partial :: (fn, [...xs]) -> fn
const partial = (f, ...init) => (...rest) => f(...init, ...rest);

export { map, reduce, filter, range, compose, partial };
