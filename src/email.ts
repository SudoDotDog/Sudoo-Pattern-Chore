/**
 * @author WMXPY
 * @namespace PatternChore
 * @description Email
 */

import { Pattern } from "@sudoo/pattern";

export type CrateEmailPatternOptions = {

    readonly invalidMessage?: (value?: any) => string;
    readonly role?: string;
};

export const createEmailPattern = (options: CrateEmailPatternOptions): Pattern => {

    return {

        type: 'custom',
        role: options.role ?? 'email',
        validate: (value: any) => {

            if (typeof value !== 'string') {
                return false;
            }

            const regexp: RegExp = /^[a-z0-9.!$%&*-_]+@[a-z0-9]+\.[a-z]{2,}$/;

            return regexp.test(String(value).toLowerCase());
        },
        invalidMessage: options.invalidMessage ?? ((value?: any) => {

            return `${value} is not a valid email address`;
        }),
    };
};
