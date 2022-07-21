const ship = (length) => {
    const shipLayout = [...Array(length)];


    const getLength = () => {
        return length;
    }

    const hit = (num) => {
        shipLayout[num-1] = 'X'
    }

    const isSunk = () => {
        if(shipLayout.every(e => e === 'X')) {
            return true;
        }
        else {
            return false;
        }
    }

    return{shipLayout, getLength, hit, isSunk}
}

module.exports = ship;