function getFullName(userEntity: {firstName: string, secondName: string}): string {
    return `${userEntity.firstName} ${userEntity.secondName}`
}

const user = {
    firstName: 'Abdugafor',  
    secondName: 'Gafarov',
    city: 'Dushanbe',
    age: 16
}

console.log(getFullName(user))