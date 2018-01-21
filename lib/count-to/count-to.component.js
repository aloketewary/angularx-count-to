"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CountToComponent = (function () {
    function CountToComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.reset = new core_1.EventEmitter(true);
    }
    CountToComponent.prototype.ngOnInit = function () {
        this.start();
    };
    CountToComponent.prototype.restart = function (countTo, countFrom, duration) {
        this.to = countTo;
        this.from = countFrom;
        this.duration = duration;
        this.start();
    };
    CountToComponent.prototype.calculate = function () {
        this.refreshInterval = 30;
        this.step = 0;
        this.timoutId = null;
        this.to = this.to || 0;
        this.from = this.from || 0;
        this.duration = ((this.duration) * 1000) || 0;
        this.steps = Math.ceil(this.duration / this.refreshInterval);
        this.increment = ((this.to - this.from) / this.steps);
        this.num = this.from;
    };
    CountToComponent.prototype.tick = function () {
        var _this = this;
        this.timoutId = setTimeout(function () {
            _this.num += _this.increment;
            _this.step++;
            if (_this.step >= _this.steps) {
                clearTimeout(_this.timoutId);
                _this.num = _this.to;
                _this.textContent = _this.to;
            }
            else {
                _this.textContent = Math.round(_this.num);
                _this.tick();
            }
        }, this.refreshInterval);
    };
    CountToComponent.prototype.start = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.timoutId) {
                clearTimeout(_this.timoutId);
            }
            _this.calculate();
            _this.tick();
        });
    };
    CountToComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timoutId);
    };
    CountToComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'countTo',
                    template: "\n    {{ textContent }}\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    CountToComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    CountToComponent.propDecorators = {
        "from": [{ type: core_1.Input },],
        "to": [{ type: core_1.Input },],
        "duration": [{ type: core_1.Input },],
        "reset": [{ type: core_1.Output },],
    };
    return CountToComponent;
}());
exports.CountToComponent = CountToComponent;
//# sourceMappingURL=count-to.component.js.map