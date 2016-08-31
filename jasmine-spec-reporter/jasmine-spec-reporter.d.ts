// Type definitions for jasmine-spec-reporter
// Project: https://github.com/bcaudan/jasmine-spec-reporter
// Definitions by: Pop Green
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jasmine {
    export function initColors(options: Object);

    export function initProcessors(options: Object);

    export function hasCustomDisplaySpecStarted(processors: any[]);

    interface SpecReporterStatic {
        new(options?: Object): SpecReporter;
    }

    interface SpecReporter {
        jasmineStarted(info: string);
        jasmineDone();
        suiteStarted(suite: any);
        suiteDone(suite: any);
        specStarted(spec: any);
        specDone(spec: any);
        reportRunnerStarting();
    }
}

declare var SpecReporter: jasmine.SpecReporterStatic;

declare module 'jasmine-spec-reporter' {
    export = SpecReporter;
}
