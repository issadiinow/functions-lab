// Code your solution in this file!
// 1. Returns the number of blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters is on 42nd Street
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // 2. Returns the number of feet from Scuber's headquarters to the pickup location
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // 3. Calculates the number of feet a passenger travels between a starting block and a destination block
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
  }
  
  // 4. Calculates the fare price based on the distance travelled
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // $0.02 per foot for distance between 400 and 2000 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of $25 for distance over 2000 and under 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
  