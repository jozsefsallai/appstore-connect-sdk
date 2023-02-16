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
/**
 * 
 * @export
 * @interface AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData
 */
export interface AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData
     */
    type: AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData
     */
    id: string;
}


/**
 * @export
 */
export const AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum = {
    AppClipAppStoreReviewDetails: 'appClipAppStoreReviewDetails'
} as const;
export type AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum = typeof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum[keyof typeof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData interface.
 */
export function instanceOfAppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataFromJSON(json: any): AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData {
    return AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataToJSON(value?: AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}
