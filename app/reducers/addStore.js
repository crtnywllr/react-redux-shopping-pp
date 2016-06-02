function addStore(state=[], action) {
    switch(action.type) {
        case ADD_STORE :
          return [
          ...state, {
          id: action.id,
          store: action.store
          }]
    }
}