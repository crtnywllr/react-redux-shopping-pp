//add store
/*export function addStore(id, store) {
    return {
        type: 'ADD_STORE',
        id,
        store
    }
}*/

// add item to list
export function addItem(id, store, item) {
    return {
        type: 'ADD_ITEM',
        id,
        item
    }
}


//delete item from list
export function deleteItem(id, index) {
    return {
        type: 'DELETE_ITEM',
        id,
        index
    }
}

//toggle check item
export function checkItem(id, item, index) {
    return {
        type: 'CHECK_ITEM',
        id,
        item,
        index
    }
}

//clear all from list
/*export function addItem(store) {
    return {
        type: 'CLEAR_LIST',
        store
    }
}*/

//edit item

/*export function editItem(id, store, item) {
    return {
        type: 'EDIT_ITEM',
        id,
        store,
        item
    }
}*/

