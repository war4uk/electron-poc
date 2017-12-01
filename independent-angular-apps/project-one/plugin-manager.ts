import { Routes } from '@angular/router';
import { MainComponent } from './src/app/modules/main/main.component';
import { AppPlugin, FirstPlugin, SecondPlugin, PluginNames } from 'typings-package';

export class PluginManager implements FirstPlugin {
    initialize(plugins: Map<string, AppPlugin>) {
        const filesPluginManager = <SecondPlugin>plugins.get(PluginNames.Second);
        const internalBroadcastChannel = new (<any>window).BroadcastChannel('files:channelId');

        internalBroadcastChannel.onmessage = function onInternalBroadcastMessage(message) {
            console.log('Project one got event from internal channel:', message.data);
            if (message.data.type === 'file:upload:selected') {
                filesPluginManager.uploadFile(message.data.file, message.data.file.innerId)
                    .subscribe(progress => {
                        console.log('observable triggered, sending complete event');
                        internalBroadcastChannel.postMessage({ progress, name: message.data.file.name, type: 'file:upload:blob:complete' });
                    });
            }
        };
    }

    getRoutes(): Routes {
        return [
            { path: 'project-one', component: MainComponent }
        ];
    }
}
