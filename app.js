"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.secondName}`;
}
const user = {
    firstName: 'Abdugafor',
    secondName: 'Gafarov',
    age: 16,
    city: 'Dushanbe'
};
console.log(getFullName(user));
