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
import type { BuildAttributes } from './BuildAttributes';
import {
    BuildAttributesFromJSON,
    BuildAttributesFromJSONTyped,
    BuildAttributesToJSON,
} from './BuildAttributes';
import type { BuildRelationships } from './BuildRelationships';
import {
    BuildRelationshipsFromJSON,
    BuildRelationshipsFromJSONTyped,
    BuildRelationshipsToJSON,
} from './BuildRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface Build
 */
export interface Build {
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    type: BuildTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Build
     */
    id: string;
    /**
     * 
     * @type {BuildAttributes}
     * @memberof Build
     */
    attributes?: BuildAttributes;
    /**
     * 
     * @type {BuildRelationships}
     * @memberof Build
     */
    relationships?: BuildRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Build
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const BuildTypeEnum = {
    Builds: 'builds'
} as const;
export type BuildTypeEnum = typeof BuildTypeEnum[keyof typeof BuildTypeEnum];


/**
 * Check if a given object implements the Build interface.
 */
export function instanceOfBuild(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BuildFromJSON(json: any): Build {
    return BuildFromJSONTyped(json, false);
}

export function BuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): Build {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BuildAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : BuildRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function BuildToJSON(value?: Build | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BuildAttributesToJSON(value.attributes),
        'relationships': BuildRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
