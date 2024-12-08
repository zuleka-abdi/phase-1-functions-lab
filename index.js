function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;  
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;  
    } else if (distance > 2000 && distance <= 2500) {
      return 25;  
    } else {
      return 'cannot travel that far';  
    }
  }
  
  
  console.log("Distance from HQ in Blocks (50th Street):", distanceFromHqInBlocks(50)); 
  console.log("Distance from HQ in Feet (50th Street):", distanceFromHqInFeet(50)); 
  console.log("Distance Travelled in Feet (34th to 38th Street):", distanceTravelledInFeet(34, 38)); 
  console.log("Fare Price (34th to 38th Street):", calculatesFarePrice(34, 38)); 
  