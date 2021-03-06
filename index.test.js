const fetchjson = require('./index')();

// Start tests ...
/* eslint-disable no-undef */
describe('fetchjson', () => {
  // Fetch data successfully
  it('expect JSON while fetching API', async () => {
    const result = await fetchjson('https://reqres.in/api/users', { per_page: 1 });

    expect(result).toMatchObject(
      expect.objectContaining({
        data: expect.any(Array),
      }),
    );
  });
});
