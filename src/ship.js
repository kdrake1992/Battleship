// Ship factory function
const ship = (length, id) => {
    // Makes an array equal to the ships length
    const shipLayout = [...Array(length)];
    const shipID = id;
    let placement = ''

    // Return ship length
    const getLength = () => {
        return length;
    }

    // Return shipID
    const getID = () => {
        return id;
    }

    // Return placement
    const getPlacement = () => {
        return placement;
    }

    // Set placement
    const setPlacement = (place) => {
        placement = place;
    }

    // Hits a ship
    const hit = (num) => {
        shipLayout[num-1] = 'x'
    }

    // Checks if the ship has sunk
    const isSunk = () => {
        if(shipLayout.every(e => e === 'x')) {
            return true;
        }
        else {
            return false;
        }
    }

    // Returns the following
    return{shipLayout, getLength, getID, getPlacement, setPlacement, hit, isSunk}
}

module.exports = ship;