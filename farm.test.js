const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
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
    const tomatoes = {
      name: 'tomatoes',
      yield: 0.5,
    };
    const input = {
      crop: tomatoes,
      numCrops: 10,
      costPrice: 0.4,
    };
    expect(getCostsForCrop(input)).toBe(2);
  });
});

// //get Revenue For Crop
describe('Calculate revenue for a crop', () => {
  test('calculate revenue for a crop', () => {
    const apples = {
      name: 'apples',
      yield: 3,
    };
    const input = {
      crop: apples,
      numCrops: 10,
      salesPrice: 0.25,
    };
    expect(getRevenueForCrop(input)).toBe(7.5);
  });
});
// get Profit For Crop
describe('Calculate profit for a crop', () => {
  test('calculate profit for a crop', () => {
    const bananas = {
      name: 'bananas',
      yield: 1.5,
    };
    const input = {
      crop: bananas,
      numCrops: 10,
      costPrice: 0.8,
      salesPrice: 1.6,
    };
    expect(getProfitForCrop(input)).toBe(12);
  });
});
// get total profit
describe('get Total Profit', () => {
  test('Calculate total profit with multiple crops', () => {
    const pears = {
      name: 'pears',
      yield: 0.6,
    };
    const cherries = {
      name: 'cherries',
      yield: 0.1,
    };
    const crops = [
      { crop: pears, numCrops: 5, costPrice: 0.25, salesPrice: 0.75 },

      { crop: cherries, numCrops: 2, costPrice: 0.05, salesPrice: 0.75 },
    ];

    expect(getTotalYield({ crops })).toBe(3.2);
  });
});
