import { faker } from '@faker-js/faker';

export class IdentifierMother {
    static generateRandom(min = 1, max = 100) {
        return faker.number.int({
            min,
            max
        })
    }

    static generateArrayRandom(length = 3, min = 1, max = 100) {
        return Array.from({ length }).map(() => faker.number.int({ min, max }));
    }
}