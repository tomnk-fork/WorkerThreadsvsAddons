const microseconds = require('microseconds');

const file = require('../../helpers/file/index');

const index = () => {
  const result = [];

  const beforeAll = microseconds.now();
  for (let i = 0; i < 200000; i++) {
    const before = microseconds.now();
    const hash = file[i];
    const after = before + microseconds.since(before);
    result.push(after - before);
  }
  const afterAll = beforeAll + microseconds.since(beforeAll);

  return afterAll - beforeAll;
};

module.exports = index;