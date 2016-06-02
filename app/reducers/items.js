function items(state=[], action) {
    switch(action.type) {
        case ADD_ITEM :
          return [
            ...state, {
            id: action.id,
            item: action.item,
            completed: false
          }]
        case DELETE_ITEM :
          return [
            ...state.slice(0, action.index),
            ...state.slice(action.index +1)
          ]
        case CHECK_ITEM :
          return [
            ...state.slice(0, action.index), {
            id: action.id,
            item: action.item,
            completed: true},
            ...state.slice(action.index +1)
          ]
        default :
          return state;
    }
    return state;
}



export default items;