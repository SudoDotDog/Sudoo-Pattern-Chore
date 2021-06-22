/**
 * @author WMXPY
 * @namespace PatternChore
 * @description Email
 */

import { Pattern } from "@sudoo/pattern";

export const createEmailPattern = (): Pattern => {

    return {

        type: 'custom',
        validate: (value: any) => {

            if (typeof value !== 'string') {
                return false;
            }

            const regexp: RegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/;

            return regexp.test(String(value).toLowerCase());
        },
    };
};
