export interface AppPlugin {
    initialize(plugins: Map<string, AppPlugin>);
}
