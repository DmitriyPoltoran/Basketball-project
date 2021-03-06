/* tslint:disable */
/* eslint-disable */
/**
 * Event service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface Photo
 */
export interface Photo {
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    name1?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    name2?: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    img1: string;
    /**
     * 
     * @type {string}
     * @memberof Photo
     */
    img2?: string;
}

export function PhotoFromJSON(json: any): Photo {
    return PhotoFromJSONTyped(json, false);
}

export function PhotoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Photo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : json['date'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'name1': !exists(json, 'name1') ? undefined : json['name1'],
        'name2': !exists(json, 'name2') ? undefined : json['name2'],
        'img1': json['img1'],
        'img2': !exists(json, 'img2') ? undefined : json['img2'],
    };
}

export function PhotoToJSON(value?: Photo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'location': value.location,
        'name1': value.name1,
        'name2': value.name2,
        'img1': value.img1,
        'img2': value.img2,
    };
}


