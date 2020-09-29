const aCar = {
    owner : "Joe Bloggs",
    type : {
        make: 'Benz',
        model: 'Corolla',
        cc: '1.8'
    },
    registration : {
        year: '201',
        countryCode: 'WD',
        number: '1058'
    },
    mileage: 10000,
    color: {
        exterior: 'red',
        interior: {
            texture: 'leather',
            shade: 'cream'
        }
    },
    previous_owners: [
        { name : 'Pat Smith', address : '- 1 Main Street'},
        { name: 'Sheila Dwyer', address: ' - 2 High Street'}
    ],
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log('Reg.=' + aCar.registration.year + '-', aCar.registration.countryCode + '-' + aCar.registration.number)
console.log('it is a' + aCar.color.exterior + 'car ,', aCar.mileage + ' mileage with ' + aCar.color.interior.texture + ' interior')
console.log('First owner : ' + aCar.previous_owners[0].name + aCar.previous_owners[0].address )

for (let i = 0 ; i < aCar.previous_owners.length ; i ++) {
    let currentUser = aCar.previous_owners[i];
    for(key in currentUser){ 
        console.log(key + ' is' + currentUser[key])
    }
} 
