export default {
    input: "dist/public_api.js",
    sourceMap: false,
    output: {
        format: "umd",
        file: "dist/bundles/firstModule.umd.js"
    },
    name: "firstModule",
    globals: {
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/router": "ng.router",
        "@angular/forms": "ng.forms",
        "@angular/platform-browser": "ng.platformBrowser",
        "rxjs/Observable": "Rx",
        "rxjs/ReplaySubject": "Rx",
        "rxjs/add/operator/map": "Rx.Observable.prototype",
        "rxjs/add/operator/mergeMap": "Rx.Observable.prototype",
        "rxjs/add/observable/fromEvent": "Rx.Observable",
        "rxjs/add/observable/of": "Rx.Observable"
    }
};
