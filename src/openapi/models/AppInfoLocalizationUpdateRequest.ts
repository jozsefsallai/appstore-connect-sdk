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
import type { AppInfoLocalizationUpdateRequestData } from './AppInfoLocalizationUpdateRequestData';
import {
    AppInfoLocalizationUpdateRequestDataFromJSON,
    AppInfoLocalizationUpdateRequestDataFromJSONTyped,
    AppInfoLocalizationUpdateRequestDataToJSON,
} from './AppInfoLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface AppInfoLocalizationUpdateRequest
 */
export interface AppInfoLocalizationUpdateRequest {
    /**
     * 
     * @type {AppInfoLocalizationUpdateRequestData}
     * @memberof AppInfoLocalizationUpdateRequest
     */
    data: AppInfoLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the AppInfoLocalizationUpdateRequest interface.
 */
export function instanceOfAppInfoLocalizationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppInfoLocalizationUpdateRequestFromJSON(json: any): AppInfoLocalizationUpdateRequest {
    return AppInfoLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function AppInfoLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppInfoLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppInfoLocalizationUpdateRequestToJSON(value?: AppInfoLocalizationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppInfoLocalizationUpdateRequestDataToJSON(value.data),
    };
}
