// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if(block>42){
        return block-42
    }else{
        return 42-block
    }
}
function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block)*264
}
function distanceTravelledInFeet(startingpoint,destination){
    if(startingpoint>destination){
        return (startingpoint-destination)*264
    }else{
        return (destination-startingpoint)*264
    }
}
function calculatesFarePrice(startingpoint,destination){
    const distance = distanceTravelledInFeet(startingpoint,destination)
    if(distance <=400){
        return 0
    }else if(distance<=2000){
        return (distance-400)*0.02
    }else if(distance<=2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
    }

    
