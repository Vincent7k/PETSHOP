type MenuOptions =''|'all'|'dog'|'cat'|'fish'

export const createMenuObject = (activeMenu: MenuOptions) =>{

    let returnObject ={
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    //Se activeMenu não estiver vazio
    //Então returnObject será true
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    return returnObject
}