// getYieldForPlant

const getYieldForPlant = (plant, factor) => {
  if (factor) {
    let environmentalFactor = plant.yield;
    console.log(environmentalFactor);
    for (let item in factor) {
      if (plant.factor[item][factor[item]] < 0) {
        environmentalFactor =
          environmentalFactor *
          (1 - -1 * (plant.factor[item][factor[item]] / 100));
      } else {
        environmentalFactor =
          environmentalFactor * (1 + plant.factor[item][factor[item]] / 100);
      }
    }
    return Math.round(environmentalFactor * 100) / 100;
  }
  return plant.yield;
};
//getYieldForCrop
// return yield for crop with no environmental factors
const getYieldForCrop = (crops, factor) => {
  if (factor) {
    return getYieldForPlant(crops.crop, factor) * crops.numCrops;
  }
  return getYieldForPlant(crops.crop) * crops.numCrops;
};

//getTotalYield
// Calculate total yield with multiple crops
// Calculate total yield with 0 amount

const getTotalYield = ({ crops }, factor) => {
  let result = 0;
  crops.forEach((crop) => {
    result += getYieldForCrop(crop, factor);
  });
  return result;
};
// getCostsForCrop
const getCostsForCrop = (crop) => {
  let costPerCrop = crop.costPrice * getYieldForCrop(crop);
  return costPerCrop;
};
//getRevenueForCrop
const getRevenueForCrop = (crop) => {
  let revenuePerCrop = crop.salesPrice * getYieldForCrop(crop);
  return revenuePerCrop;
};

//getProfitForCrop
const getProfitForCrop = (crop) => {
  let profitPerCrop = getRevenueForCrop(crop) - getCostsForCrop(crop);
  return profitPerCrop;
};

//getTotalProfit
const getTotalProfit = ({ crops }) => {
  let result = 0;
  crops.forEach((crop) => {
    result += getProfitForCrop(crop);
  });
  return result;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
