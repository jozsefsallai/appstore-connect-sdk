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
import type { PromotedPurchaseCreateRequestDataAttributes } from './PromotedPurchaseCreateRequestDataAttributes';
import {
    PromotedPurchaseCreateRequestDataAttributesFromJSON,
    PromotedPurchaseCreateRequestDataAttributesFromJSONTyped,
    PromotedPurchaseCreateRequestDataAttributesToJSON,
} from './PromotedPurchaseCreateRequestDataAttributes';
import type { PromotedPurchaseCreateRequestDataRelationships } from './PromotedPurchaseCreateRequestDataRelationships';
import {
    PromotedPurchaseCreateRequestDataRelationshipsFromJSON,
    PromotedPurchaseCreateRequestDataRelationshipsFromJSONTyped,
    PromotedPurchaseCreateRequestDataRelationshipsToJSON,
} from './PromotedPurchaseCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface PromotedPurchaseCreateRequestData
 */
export interface PromotedPurchaseCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseCreateRequestData
     */
    type: PromotedPurchaseCreateRequestDataTypeEnum;
    /**
     * 
     * @type {PromotedPurchaseCreateRequestDataAttributes}
     * @memberof PromotedPurchaseCreateRequestData
     */
    attributes: PromotedPurchaseCreateRequestDataAttributes;
    /**
     * 
     * @type {PromotedPurchaseCreateRequestDataRelationships}
     * @memberof PromotedPurchaseCreateRequestData
     */
    relationships: PromotedPurchaseCreateRequestDataRelationships;
}


/**
 * @export
 */
export const PromotedPurchaseCreateRequestDataTypeEnum = {
    PromotedPurchases: 'promotedPurchases'
} as const;
export type PromotedPurchaseCreateRequestDataTypeEnum = typeof PromotedPurchaseCreateRequestDataTypeEnum[keyof typeof PromotedPurchaseCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseCreateRequestData interface.
 */
export function instanceOfPromotedPurchaseCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function PromotedPurchaseCreateRequestDataFromJSON(json: any): PromotedPurchaseCreateRequestData {
    return PromotedPurchaseCreateRequestDataFromJSONTyped(json, false);
}

export function PromotedPurchaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': PromotedPurchaseCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': PromotedPurchaseCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function PromotedPurchaseCreateRequestDataToJSON(value?: PromotedPurchaseCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': PromotedPurchaseCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': PromotedPurchaseCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
