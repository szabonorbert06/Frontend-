
/** 
*    Creates an array of five elements
*    @param {number} data,
*    @param {number} container,
*    @param {string} type
*/
 const gyumolcsok = ["alma", "dinnye", "áfonya", "eper", "barack"];
 document.getElementById("gyumolcs");

 /** 
*    Creates an array of five elements
*    @param {number} data,
*    @param {number} container,
*    @param {string} type
*/

 const createOrderList = (data, container) =>{
    let = document.createElement("ol");
    for (const eement of data){
        createListItem(Element, orderList);
    }
    container.appendChild(orderList);

 }
/** 
* This function creates a new list item (<li>),
  sets its text to the given data, and appends it to the specified list.
*    @param {number} data,
*    @param {number} container,
*    @param {string} type
*/

 const createListItem = (data, list)=>{
    let = document.createElement("li");
    item.innerText = data;
    list.appendChild(item);
 }

 createOrderList(gyumolcsok,);
 /////////////////////////////////////////////////////////////////
/** 
* 
*    @param {number} data,
*    @param {number} container,
*    @param {string} type
*/

 while (index<gyumolcsok.lenght && !(gyumolcsok[index] ==="banan")){
    index++;
 }

 if (index<gyumolcsok.length){
    p.innerText="Van banan a tomben!"
    gyumolcsokContainer.appendChild(p);
 }

 else{
    p.innerText="Nincs banan a tomben!"
    gyumolcsokContainer.appendChild(p)
 }

 createOrderList(gyumolcsok, gyumolcsokContainer);
 //           fügvénnyel  ||
 //                       vv
/** 
* This function (checkvalue) checks whether a given value (value)
 is contained in an array (array) and returns a true or false value accordingly.
*    @param {number} data,
*    @param {number} container,
*    @param {string} type
*/

const checkvalue=(value, array) => {
    let index = 0;
    while(index < array.lenght && !(array[index] === value )) {
        index++;
    }
    return index < array.lenght; 
}
////////////////////////////////////////////////////////////////////

