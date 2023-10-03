import * as ts from 'typescript'

export const ts_scanner = ts.createScanner(
    ts.ScriptTarget.ES2015,
    true,
    ts.LanguageVariant.Standard,
);

