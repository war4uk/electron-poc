export default {
    input: "dist/index.js",
    sourceMap: false,
    output: {
        format: "umd",
        file: "dist/bundles/broadcastModule.umd.js"
    },
    name: "applicationBroadcast",
    globals: {
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "rxjs/Observable": "Rx",
        "rxjs/ReplaySubject": "Rx",
        "rxjs/add/operator/map": "Rx.Observable.prototype",
        "rxjs/add/operator/mergeMap": "Rx.Observable.prototype",
        "rxjs/add/observable/fromEvent": "Rx.Observable",
        "rxjs/add/observable/of": "Rx.Observable"
    }
};
