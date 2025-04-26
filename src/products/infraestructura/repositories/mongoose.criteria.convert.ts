import { Criteria } from "../../../common/domain/criteria";

export class MongooseCriteriaConvert {

    static convert(criteria: Criteria) {
        return {
            start: criteria.start * criteria.size,
            size: criteria.size,
        }
    }
} 