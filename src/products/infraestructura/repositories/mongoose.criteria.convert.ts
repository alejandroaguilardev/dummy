import { Criteria } from "../../../common/domain/criteria";

export class MongooseCriteriaConvert {

    static convert(criteria: Criteria) {
        return {
            page: criteria.page,
            start: (criteria.page - 1) * criteria.limit,
            size: criteria.limit,
        }
    }
} 