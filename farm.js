// getYieldForPlant
const getYieldForPlant = (plant) => {
  // return yield for plant with no environmental factors
  return plant.yield;
};

//getYieldForCrop
// return yield for crop with no environmental factors
const getYieldForCrop = (crops) => {
  result = getYieldForPlant(crops.crop) * crops.numCrops;
  return result;
};

//getTotalYield
// Calculate total yield with multiple crops
// Calculate total yield with 0 amount

const getTotalYield = ({ crops }) => {
  let result = 0;
  crops.forEach((crop) => {
    result += getYieldForCrop(crop);
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

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
};
