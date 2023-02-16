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
import type { AppStoreVersionExperimentTreatmentCreateRequestDataAttributes } from './AppStoreVersionExperimentTreatmentCreateRequestDataAttributes';
import {
    AppStoreVersionExperimentTreatmentCreateRequestDataAttributesFromJSON,
    AppStoreVersionExperimentTreatmentCreateRequestDataAttributesFromJSONTyped,
    AppStoreVersionExperimentTreatmentCreateRequestDataAttributesToJSON,
} from './AppStoreVersionExperimentTreatmentCreateRequestDataAttributes';
import type { AppStoreVersionExperimentTreatmentCreateRequestDataRelationships } from './AppStoreVersionExperimentTreatmentCreateRequestDataRelationships';
import {
    AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSON,
    AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSONTyped,
    AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsToJSON,
} from './AppStoreVersionExperimentTreatmentCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentCreateRequestData
 */
export interface AppStoreVersionExperimentTreatmentCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentCreateRequestData
     */
    type: AppStoreVersionExperimentTreatmentCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentCreateRequestDataAttributes}
     * @memberof AppStoreVersionExperimentTreatmentCreateRequestData
     */
    attributes: AppStoreVersionExperimentTreatmentCreateRequestDataAttributes;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentCreateRequestDataRelationships}
     * @memberof AppStoreVersionExperimentTreatmentCreateRequestData
     */
    relationships: AppStoreVersionExperimentTreatmentCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentCreateRequestDataTypeEnum = {
    AppStoreVersionExperimentTreatments: 'appStoreVersionExperimentTreatments'
} as const;
export type AppStoreVersionExperimentTreatmentCreateRequestDataTypeEnum = typeof AppStoreVersionExperimentTreatmentCreateRequestDataTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentCreateRequestData interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataFromJSON(json: any): AppStoreVersionExperimentTreatmentCreateRequestData {
    return AppStoreVersionExperimentTreatmentCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppStoreVersionExperimentTreatmentCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataToJSON(value?: AppStoreVersionExperimentTreatmentCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppStoreVersionExperimentTreatmentCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
