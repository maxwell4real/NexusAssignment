const data = require('@faker-js/faker');
class Fixture {
    public fakeUserDetail() {
        return {
            title:'mr',
            firstName: data.faker.name.firstName(),
            lastName: data.faker.name.lastName(),
            email:`${data.faker.name.suffix()}${new Date().getTime()}@rapha.cc`,
            password:data.faker.internet.password(),
            address: {
                uk: {
                    country:'GB',
                    finder:'SE1 5AN',
                    postal:'SW11 1XJ',
                    town:'London',
                    phone: data.faker.phone.number('009891######'),
                    addressLine: `1 Webb's Road`,
                },
                de: {
                    country:'DE',
                    finder:'Elstertrebnitz',
                    postal:'73564',
                    town:'Spraitbach',
                    phone: data.faker.phone.number('009891######'),
                    addressLine: `Postfach 1`,
                },
                kr: {
                    country:'KR',
                    finder:'asd',
                    postal:'04523',
                    town:'seoul',
                    phone: data.faker.phone.number('09891######'),
                    addressLine: 'Flat 5'+new Date().getTime(),
                },
                us: {
                    country:'US',
                    finder:'asd',
                    province : 'New York',
                    postal:'10003-4312',
                    town:'New York',
                    phone: data.faker.phone.number('09891######'),
                    addressLine: `1 5th Ave`,
                },
                jp: {
                    country:'JP',
                    finder:'asd',
                    postal:'04523',
                    town:'seoul',
                    phone: data.faker.phone.number('09891######'),
                    addressLine: 'Flat 5'+new Date().getTime(),
                },
            },
        };
    }

};
export default new Fixture();