function sortName (object, organize) {

let sortEmployees;
let sortOrder = sortOrder;

function ascend(a, b) {
    const firstEmployee = a.name.first
    const secondEmployee = b.name.first

    let comparison = 0;
    if (secondEmployee > firstEmployee) {
        comparison = 1;
    } else if (firstEmployee < secondEmployee) {
        comparison = -1;
    }
    return comparison

}

function descend(a, b) {
    const firstEmployee = a.name.first
    const secondEmployee = b.name.first

    let comparison = 0;
    if (firstEmployee < secondEmployee) {
        comparison = 1;
    } else if (firstEmployee > secondEmployee) {
        comparison = -1
    }
    return comparison;
}

if (sortOrder===1) {
    sortEmployees= object.sort(ascend);
} else if (sortOrder=== 0) {
    sortEmployees= object.sort(descend);
}
return sortEmployees
}

module.exports= {sortName}

// import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?results=10&nat=us";

// export default {
//     search: function(){
//         return axios.get(BASEURL);
//     }
// };