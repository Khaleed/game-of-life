// map :: (fn) -> (xs) -> fn
const map = (f) => (array) => array.map(f);
// filter :: (fn) -> (xs) -> fn
const filter = (f) => (array) => array.filter(f);
// reduce :: (fn) -> (xs) -> fn
const reduce = (f) => (array) => array.reduce(f);
// concat :: (x) -> (xs) -> fn
const concat = (x) => (xs) => xs.concat(x);
// range :: [x] -> [xs]
const range = (x) => [...Array(x).keys()];
// compose :: ([...fs]) -> fn
const compose = (...fs) => fs.reduce((f, g) => (...args) => f(g(...args)));
// partial :: (fn, [...xs]) -> fn
const partial = (f, ...init) => (...rest) => f(...init, ...rest);

export { map, reduce, filter, concat, range, compose, partial };
