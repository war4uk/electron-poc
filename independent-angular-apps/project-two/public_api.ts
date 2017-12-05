export * from './src/app/modules/main/main.module';
export * from './src/app/modules/main/services/upload-file.service';

import * as PluginManagerImpl from './plugin-manager';

export const PluginManager = PluginManagerImpl;

