"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var count_to_component_1 = require("./count-to/count-to.component");
var CountToModule = (function () {
    function CountToModule() {
    }
    CountToModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        count_to_component_1.CountToComponent
                    ],
                    exports: [
                        count_to_component_1.CountToComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    CountToModule.ctorParameters = function () { return []; };
    return CountToModule;
}());
exports.CountToModule = CountToModule;
//# sourceMappingURL=angularx-count-to.module.js.map