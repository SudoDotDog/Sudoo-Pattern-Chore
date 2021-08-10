/**
 * @author WMXPY
 * @namespace PatternChore
 * @description Email
 * @override Unit Test
 */

import { Pattern, validatePatternSchema } from "@sudoo/pattern";
import { createInvalid, createVerifyResult, Verifier, VerifyResult } from "@sudoo/verify";
import { expect } from "chai";
import * as Chance from "chance";
import { createEmailPattern } from "../../src";

describe('Given (Email) Patterns', (): void => {

    const chance: Chance.Chance = new Chance('pattern-core-email');

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

    it('should be able to verify email with numbers', (): void => {

        const pattern: Pattern = createEmailPattern();
        const verifier: Verifier = Verifier.create(pattern);

        const result: VerifyResult = verifier.verify('hello123@256.live');

        expect(result).to.be.deep.equal({

            succeed: true,
            invalids: [],
        });
    });

    it('should be able to verify email with dots', (): void => {

        const pattern: Pattern = createEmailPattern();
        const verifier: Verifier = Verifier.create(pattern);

        const result: VerifyResult = verifier.verify('hello.123@256.live');

        expect(result).to.be.deep.equal({

            succeed: true,
            invalids: [],
        });
    });

    it('should be able to verify email with symbol', (): void => {

        const pattern: Pattern = createEmailPattern();
        const verifier: Verifier = Verifier.create(pattern);

        const result: VerifyResult = verifier.verify('hel!l--o_.123@256.live');

        expect(result).to.be.deep.equal({

            succeed: true,
            invalids: [],
        });
    });

    it('should be able to reject email with invalid domain', (): void => {

        const pattern: Pattern = createEmailPattern();
        const verifier: Verifier = Verifier.create(pattern);

        const email: string = 'hello123@256.123';
        const result: VerifyResult = verifier.verify(email);

        expect(result).to.be.deep.equal(createVerifyResult(
            false,
            [
                createInvalid(`${email} is not a valid email address`, email, "value", []),
            ],
        ));
    });

    it('should be able to reject email with invalid domain - override invalid message', (): void => {

        const pattern: Pattern = createEmailPattern({
            invalidMessage: () => "invalid message",
        });
        const verifier: Verifier = Verifier.create(pattern);

        const email: string = 'hello123@256.123';
        const result: VerifyResult = verifier.verify(email);

        expect(result).to.be.deep.equal(createVerifyResult(
            false,
            [
                createInvalid("invalid message", email, "value", []),
            ],
        ));
    });
});
