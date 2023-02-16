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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { AppsResponseIncludedInner } from './AppsResponseIncludedInner';
import {
    AppsResponseIncludedInnerFromJSON,
    AppsResponseIncludedInnerFromJSONTyped,
    AppsResponseIncludedInnerToJSON,
} from './AppsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppResponse
 */
export interface AppResponse {
    /**
     * 
     * @type {App}
     * @memberof AppResponse
     */
    data: App;
    /**
     * 
     * @type {Array<AppsResponseIncludedInner>}
     * @memberof AppResponse
     */
    included?: Array<AppsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppResponse interface.
 */
export function instanceOfAppResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppResponseFromJSON(json: any): AppResponse {
    return AppResponseFromJSONTyped(json, false);
}

export function AppResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppResponseToJSON(value?: AppResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}
