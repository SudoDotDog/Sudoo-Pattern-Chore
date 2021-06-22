/**
 * @author WMXPY
 * @namespace PatternChore
 * @description Email
 * @override Unit Test
 */

import { Pattern, validatePatternSchema } from "@sudoo/pattern";
import { Verifier, VerifyResult } from "@sudoo/verify";
import { expect } from "chai";
import * as Chance from "chance";
import { createEmailPattern } from "../../src";

describe('Given (Email) Patterns', (): void => {

    const chance: Chance.Chance = new Chance('placeholder');

    it('should be able to create pattern object', (): void => {

        const pattern: Pattern = createEmailPattern();
        const validation: boolean = validatePatternSchema(pattern);

        expect(validation).to.be.true;
    });

    it('should be able to verify simple email', (): void => {

        const pattern: Pattern = createEmailPattern();
        const verifier: Verifier = Verifier.create(pattern);

        const result: VerifyResult = verifier.verify(chance.email());

        expect(result).to.be.deep.equal({

            succeed: true,
            invalids: [],
        });
    });
});
