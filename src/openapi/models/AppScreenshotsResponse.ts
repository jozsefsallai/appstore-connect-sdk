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
import type { AppScreenshot } from './AppScreenshot';
import {
    AppScreenshotFromJSON,
    AppScreenshotFromJSONTyped,
    AppScreenshotToJSON,
} from './AppScreenshot';
import type { AppScreenshotSet } from './AppScreenshotSet';
import {
    AppScreenshotSetFromJSON,
    AppScreenshotSetFromJSONTyped,
    AppScreenshotSetToJSON,
} from './AppScreenshotSet';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppScreenshotsResponse
 */
export interface AppScreenshotsResponse {
    /**
     * 
     * @type {Array<AppScreenshot>}
     * @memberof AppScreenshotsResponse
     */
    data: Array<AppScreenshot>;
    /**
     * 
     * @type {Array<AppScreenshotSet>}
     * @memberof AppScreenshotsResponse
     */
    included?: Array<AppScreenshotSet>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppScreenshotsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppScreenshotsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppScreenshotsResponse interface.
 */
export function instanceOfAppScreenshotsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppScreenshotsResponseFromJSON(json: any): AppScreenshotsResponse {
    return AppScreenshotsResponseFromJSONTyped(json, false);
}

export function AppScreenshotsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppScreenshotFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppScreenshotSetFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppScreenshotsResponseToJSON(value?: AppScreenshotsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppScreenshotToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppScreenshotSetToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
