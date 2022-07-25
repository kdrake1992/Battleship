// Ship factory function
const ship = (length, id) => {
    // Makes an array equal to the ships length
    const shipLayout = [...Array(length)];
    const shipID = id;

    // Return ship length
    const getLength = () => {
        return length;
    }

    // Return shipID
    const getID = () => {
        return id;
    }

    // Hits a ship
    const hit = (num) => {
        shipLayout[num-1] = 'X'
    }

    // Checks if the ship has sunk
    const isSunk = () => {
        if(shipLayout.every(e => e === 'X')) {
            return true;
        }
        else {
            return false;
        }
    }

    // Returns the following
    return{shipLayout, getLength, getID, hit, isSunk}
}

module.exports = ship;