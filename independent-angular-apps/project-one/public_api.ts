export * from './src/app/modules/main/main.module';
export * from './src/app/services/services.module';

import * as PluginManagerImpl from './plugin-manager';

export const PluginManager = PluginManagerImpl;
