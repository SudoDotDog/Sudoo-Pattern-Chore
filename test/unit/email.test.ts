/**
 * @author WMXPY
 * @namespace PatternChore
 * @description Email
 * @override Unit Test
 */

import { Pattern, validatePatternSchema } from "@sudoo/pattern";
import { expect } from "chai";
import * as Chance from "chance";
import { createEmailPattern } from "../../src";

describe('Given (Email) Patterns', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('placeholder');

    it('should be able to create pattern object', (): void => {

        const pattern: Pattern = createEmailPattern();
        const validation: boolean = validatePatternSchema(pattern);

        expect(validation).to.be.true;
    });
});
