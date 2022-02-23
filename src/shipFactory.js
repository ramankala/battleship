
const shipFactory = (length) => {
    const ship = [];

    const hit = (pos) => ship[pos] = 'hit';

    return {
        length,
        hit
    }
};

export { shipFactory };