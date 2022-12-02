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

      { crop: cherries, numCrops: 2, costPrice: 0.5, salesPrice: 1.75 },
    ];

    expect(getTotalProfit({ crops })).toBe(1.75);
  });
});

// get plant yield with environmental factors
describe('get plantyield with environmental factors', () => {
  const corn = {
    name: 'corn',
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  const environmentFactors = {
    sun: 'low',
  };

  test('Get yield for plant with environment factors', () => {
    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });
});
describe('get plantyield with environmental factors', () => {
  const corn = {
    name: 'corn',
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: 100,
        medium: 50,
        high: -60,
      },
    },
  };

  const environmentFactors = {
    sun: 'low',
    wind: 'high',
  };

  test('Get yield for plant with environment factors', () => {
    expect(getYieldForPlant(corn, environmentFactors)).toBe(6);
  });
});
// get yield for crop with environmental factors
describe('get yield for crops with environmental factors', () => {
  const bananas = {
    name: 'bananas',
    yield: 3,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: 100,
        medium: 50,
        high: -60,
      },
    },
  };
  const input = {
    crop: bananas,
    numCrops: 10,
  };
  const environmentFactors1 = {
    sun: 'low',
    wind: 'high',
  };
  const environmentFactors2 = {
    sun: 'medium',
    wind: 'medium',
  };
  const environmentFactors3 = {
    sun: 'medium',
    wind: 'low',
  };
  expect(getYieldForCrop(input, environmentFactors1)).toBe(6);
  expect(getYieldForCrop(input, environmentFactors2)).toBe(45);
  expect(getYieldForCrop(input, environmentFactors3)).toBe(60);
});
// Get total yield with environmental factors
describe('getTotalYield', () => {
  test('Calculate total yield with multiple crops and factors', () => {
    const corn = {
      name: 'corn',
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 100,
          medium: 50,
          high: -60,
        },
      },
    };
    const pumpkin = {
      name: 'pumpkin',
      yield: 4,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 100,
          medium: 50,
          high: -60,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    const environmentFactors1 = {
      sun: 'medium',
      wind: 'low',
    };
    const environmentFactors2 = {
      sun: 'low',
      wind: 'low',
    };

    expect(getTotalYield({ crops }, environmentFactors1)).toBe(46);
    expect(getTotalYield({ crops }, environmentFactors2)).toBe(23);
  });
});
// get RevenueFoCrop with environmental factors
describe('Calculate revenue for a crop with environmental factors', () => {
  test('calculate revenue for a crop', () => {
    const apples = {
      name: 'apples',
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 100,
          medium: 50,
          high: -60,
        },
      },
    };
    const input = {
      crop: apples,
      numCrops: 10,
      salesPrice: 0.25,
    };
    const environmentFactors1 = {
      sun: 'high',
      wind: 'low',
    };
    const environmentFactors2 = {
      sun: 'low',
      wind: 'high',
    };
    expect(getRevenueForCrop(input, environmentFactors1)).toBe(22.5);
    expect(getRevenueForCrop(input, environmentFactors2)).toBe(1.5);
  });
});

// get Profit For Crop with environmental factors
describe('Calculate profit for a crop', () => {
  test('calculate profit for a crop', () => {
    const bananas = {
      name: 'bananas',
      yield: 1.5,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        monkeys: {
          low: 100,
          medium: 50,
          high: -100,
        },
      },
    };
    const input = {
      crop: bananas,
      numCrops: 10,
      costPrice: 0.8,
      salesPrice: 1.6,
    };
    const environmentFactors1 = {
      sun: 'high',
      monkeys: 'low',
    };
    const environmentFactors2 = {
      sun: 'low',
      monkeys: 'high',
    };
    expect(getProfitForCrop(input, environmentFactors1)).toBe(60);
    expect(getProfitForCrop(input, environmentFactors2)).toBe(-12);
  });
});
