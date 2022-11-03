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
const getTotalYield = ({ crops }) => {
  let result = 0;
  crops.forEach((crop) => {
    result += getYieldForCrop(crop);
  });
  return result;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};