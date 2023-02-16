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
import type { AppClipRelationshipsAppData } from './AppClipRelationshipsAppData';
import {
    AppClipRelationshipsAppDataFromJSON,
    AppClipRelationshipsAppDataFromJSONTyped,
    AppClipRelationshipsAppDataToJSON,
} from './AppClipRelationshipsAppData';

/**
 * 
 * @export
 * @interface BetaTesterAppsLinkagesRequest
 */
export interface BetaTesterAppsLinkagesRequest {
    /**
     * 
     * @type {Array<AppClipRelationshipsAppData>}
     * @memberof BetaTesterAppsLinkagesRequest
     */
    data: Array<AppClipRelationshipsAppData>;
}

/**
 * Check if a given object implements the BetaTesterAppsLinkagesRequest interface.
 */
export function instanceOfBetaTesterAppsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaTesterAppsLinkagesRequestFromJSON(json: any): BetaTesterAppsLinkagesRequest {
    return BetaTesterAppsLinkagesRequestFromJSONTyped(json, false);
}

export function BetaTesterAppsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterAppsLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppClipRelationshipsAppDataFromJSON)),
    };
}

export function BetaTesterAppsLinkagesRequestToJSON(value?: BetaTesterAppsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppClipRelationshipsAppDataToJSON)),
    };
}
