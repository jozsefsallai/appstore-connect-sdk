/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BetaAppReviewSubmissionCreateRequestDataRelationships } from './BetaAppReviewSubmissionCreateRequestDataRelationships';
import {
    BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSON,
    BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSONTyped,
    BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSON,
} from './BetaAppReviewSubmissionCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface BetaAppReviewSubmissionCreateRequestData
 */
export interface BetaAppReviewSubmissionCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppReviewSubmissionCreateRequestData
     */
    type: BetaAppReviewSubmissionCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaAppReviewSubmissionCreateRequestDataRelationships}
     * @memberof BetaAppReviewSubmissionCreateRequestData
     */
    relationships: BetaAppReviewSubmissionCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaAppReviewSubmissionCreateRequestDataTypeEnum = {
    BetaAppReviewSubmissions: 'betaAppReviewSubmissions'
} as const;
export type BetaAppReviewSubmissionCreateRequestDataTypeEnum = typeof BetaAppReviewSubmissionCreateRequestDataTypeEnum[keyof typeof BetaAppReviewSubmissionCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppReviewSubmissionCreateRequestData interface.
 */
export function instanceOfBetaAppReviewSubmissionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function BetaAppReviewSubmissionCreateRequestDataFromJSON(json: any): BetaAppReviewSubmissionCreateRequestData {
    return BetaAppReviewSubmissionCreateRequestDataFromJSONTyped(json, false);
}

export function BetaAppReviewSubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewSubmissionCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaAppReviewSubmissionCreateRequestDataToJSON(value?: BetaAppReviewSubmissionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
