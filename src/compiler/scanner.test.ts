import { ts_scanner } from "./scanner";
import * as ts from "typescript";

describe("scanner", () => {
    ts_scanner.setText("var");
    test("ts_scanner", () => {
        expect(ts_scanner.scan()).toBe(ts.SyntaxKind.VarKeyword);
    })
})
