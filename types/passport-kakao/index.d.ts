// Type definitions for passport-kakao 1.0
// Project: https://github.com/rotoshine/passport-kakao
// Definitions by: Park9eon <https://github.com/Park9eon>
//                 ZeroCho <https://github.com/zerocho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require("passport");
import express = require("express");

export interface Profile extends passport.Profile {
    id: string;
    provider: string;

    _raw: string;
    _json: any;
}

export interface StrategyOption {
    clientID: string;
    callbackURL: string;

    clientSecret?: string | undefined;
    scopeSeparator?: string | undefined;
    customHeaders?: string | undefined;
}

export interface StrategyOptionWithRequest extends StrategyOption {
    passReqToCallback: true;
}

export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;
export type VerifyFunctionWithRequest = (
    req: express.Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOption, verify: VerifyFunction);
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);

    authenticate(req: express.Request, options?: any): void;
    userProfile: (accessToken: string, done: (error: any, user?: any) => void) => void;
}
