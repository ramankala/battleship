
const shipFactory = (length) => {
    const ship = [];

    const hit = (pos) => ship[pos] = 'hit';

    const isSunk = () => {
        let count = 0;
        let sunk = false;

        ship.forEach(function(item){
            if (item === 'hit'){
                count += 1;
            }
        });
        if (count === length) {
            sunk = true;
        } else {
            sunk = false;
        }

        return sunk;
    };

    return {
        ship,
        length,
        hit,
        isSunk,
    }
};

export { shipFactory };