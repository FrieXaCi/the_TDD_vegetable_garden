const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
} = require('./farm');

// tests bij WINC Academy get yield for plant
describe('getYieldForPlant', () => {
  const corn = {
    name: 'corn',
    yield: 30,
  };

  test('Get yield for plant with no environment factors', () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

// tests bij WINC Academy get yield bij crop
describe('getYieldForCrop', () => {
  test('Get yield for crop, simple', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

// tests bij WINC Academy get total yield
describe('getTotalYield', () => {
  test('Calculate total yield with multiple crops', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const pumpkin = {
      name: 'pumpkin',
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];

    expect(getTotalYield({ crops })).toBe(23);
  });

  test('Calculate total yield with 0 amount', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

// Tests written by Frieda Haringsma
// get Costs For Crop

describe('Calculate cost for a crop', () => {
  test('calculate cost for a crop', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
      costPrice: 2,
    };
    expect(getCostsForCrop(input)).toBe(20);
  });
});

// //getRevenueForCrop
describe('Calculate revenue for a crop', () => {
  test('calculate revenue for a crop', () => {
    const corn = {
      name: 'corn',
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
      salesPrice: 4,
    };
    expect(getRevenueForCrop(input)).toBe(40);
  });
});
