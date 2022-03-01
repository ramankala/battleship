
const Player = (name, isActive = false) => {
    
    let state = {
        name,
        isActive,
    }

    return {
        get name(){return state.name;},
        get isActive(){return state.isActive;},
        toggle(){ state.isActive = !state.isActive;},
    }
};

export { Player };