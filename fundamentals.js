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
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log('Reg.=' + aCar.registration.year + '-', aCar.registration.countryCode + '-' + aCar.registration.number)