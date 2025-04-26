import { faker } from '@faker-js/faker';

export class IdentifierMother {
    static generateRandom(min = 1, max = 100) {
        return faker.number.int({
            min,
            max
        })
    }
}