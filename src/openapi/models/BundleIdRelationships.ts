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
import type { AppClipRelationshipsApp } from './AppClipRelationshipsApp';
import {
    AppClipRelationshipsAppFromJSON,
    AppClipRelationshipsAppFromJSONTyped,
    AppClipRelationshipsAppToJSON,
} from './AppClipRelationshipsApp';
import type { BundleIdRelationshipsBundleIdCapabilities } from './BundleIdRelationshipsBundleIdCapabilities';
import {
    BundleIdRelationshipsBundleIdCapabilitiesFromJSON,
    BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped,
    BundleIdRelationshipsBundleIdCapabilitiesToJSON,
} from './BundleIdRelationshipsBundleIdCapabilities';
import type { BundleIdRelationshipsProfiles } from './BundleIdRelationshipsProfiles';
import {
    BundleIdRelationshipsProfilesFromJSON,
    BundleIdRelationshipsProfilesFromJSONTyped,
    BundleIdRelationshipsProfilesToJSON,
} from './BundleIdRelationshipsProfiles';

/**
 * 
 * @export
 * @interface BundleIdRelationships
 */
export interface BundleIdRelationships {
    /**
     * 
     * @type {BundleIdRelationshipsProfiles}
     * @memberof BundleIdRelationships
     */
    profiles?: BundleIdRelationshipsProfiles;
    /**
     * 
     * @type {BundleIdRelationshipsBundleIdCapabilities}
     * @memberof BundleIdRelationships
     */
    bundleIdCapabilities?: BundleIdRelationshipsBundleIdCapabilities;
    /**
     * 
     * @type {AppClipRelationshipsApp}
     * @memberof BundleIdRelationships
     */
    app?: AppClipRelationshipsApp;
}

/**
 * Check if a given object implements the BundleIdRelationships interface.
 */
export function instanceOfBundleIdRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BundleIdRelationshipsFromJSON(json: any): BundleIdRelationships {
    return BundleIdRelationshipsFromJSONTyped(json, false);
}

export function BundleIdRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profiles': !exists(json, 'profiles') ? undefined : BundleIdRelationshipsProfilesFromJSON(json['profiles']),
        'bundleIdCapabilities': !exists(json, 'bundleIdCapabilities') ? undefined : BundleIdRelationshipsBundleIdCapabilitiesFromJSON(json['bundleIdCapabilities']),
        'app': !exists(json, 'app') ? undefined : AppClipRelationshipsAppFromJSON(json['app']),
    };
}

export function BundleIdRelationshipsToJSON(value?: BundleIdRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profiles': BundleIdRelationshipsProfilesToJSON(value.profiles),
        'bundleIdCapabilities': BundleIdRelationshipsBundleIdCapabilitiesToJSON(value.bundleIdCapabilities),
        'app': AppClipRelationshipsAppToJSON(value.app),
    };
}
