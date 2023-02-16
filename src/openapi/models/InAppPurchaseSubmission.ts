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
import type { InAppPurchaseAppStoreReviewScreenshotRelationships } from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface InAppPurchaseSubmission
 */
export interface InAppPurchaseSubmission {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseSubmission
     */
    type: InAppPurchaseSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseSubmission
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationships}
     * @memberof InAppPurchaseSubmission
     */
    relationships?: InAppPurchaseAppStoreReviewScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseSubmission
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseSubmissionTypeEnum = {
    InAppPurchaseSubmissions: 'inAppPurchaseSubmissions'
} as const;
export type InAppPurchaseSubmissionTypeEnum = typeof InAppPurchaseSubmissionTypeEnum[keyof typeof InAppPurchaseSubmissionTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseSubmission interface.
 */
export function instanceOfInAppPurchaseSubmission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function InAppPurchaseSubmissionFromJSON(json: any): InAppPurchaseSubmission {
    return InAppPurchaseSubmissionFromJSONTyped(json, false);
}

export function InAppPurchaseSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseSubmission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseSubmissionToJSON(value?: InAppPurchaseSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'relationships': InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
