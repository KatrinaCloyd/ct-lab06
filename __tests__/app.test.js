const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('ct-lab06 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('gets HTML for Index.html', async () => {
    const res = await request(app)
      .get('/index.html');
    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Index</title>
</head>

<body>
    <h1>You have reached the Index page! </h1>
</body>

</html>`);
  });

});
