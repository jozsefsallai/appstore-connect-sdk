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
import type { AppRelationshipsPromotedPurchasesDataInner } from './AppRelationshipsPromotedPurchasesDataInner';
import {
    AppRelationshipsPromotedPurchasesDataInnerFromJSON,
    AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped,
    AppRelationshipsPromotedPurchasesDataInnerToJSON,
} from './AppRelationshipsPromotedPurchasesDataInner';

/**
 * 
 * @export
 * @interface AppPromotedPurchasesLinkagesRequest
 */
export interface AppPromotedPurchasesLinkagesRequest {
    /**
     * 
     * @type {Array<AppRelationshipsPromotedPurchasesDataInner>}
     * @memberof AppPromotedPurchasesLinkagesRequest
     */
    data: Array<AppRelationshipsPromotedPurchasesDataInner>;
}

/**
 * Check if a given object implements the AppPromotedPurchasesLinkagesRequest interface.
 */
export function instanceOfAppPromotedPurchasesLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppPromotedPurchasesLinkagesRequestFromJSON(json: any): AppPromotedPurchasesLinkagesRequest {
    return AppPromotedPurchasesLinkagesRequestFromJSONTyped(json, false);
}

export function AppPromotedPurchasesLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPromotedPurchasesLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppRelationshipsPromotedPurchasesDataInnerFromJSON)),
    };
}

export function AppPromotedPurchasesLinkagesRequestToJSON(value?: AppPromotedPurchasesLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppRelationshipsPromotedPurchasesDataInnerToJSON)),
    };
}
