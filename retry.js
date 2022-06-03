// @ts-check

// BEGIN (write your solution here)
const noop = () => { };

const retry = (count, fn, callback = noop) => {
  const cb = (err, result) => {
    if (!err || count <= 1) {
      callback(err, result);
      return;
    }
    retry(count - 1, fn, callback);
  };

  fn(cb);
};

export default retry;
// END
