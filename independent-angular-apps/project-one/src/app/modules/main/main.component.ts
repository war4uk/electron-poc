import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fromByteArray } from 'base64-js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  internalBroadcastChannel = null;
  currentFiles = {};
  blobSize = 1000;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.internalBroadcastChannel = new (<any>window).BroadcastChannel('files:channelId');
    this.internalBroadcastChannel.postMessage('Hello from project one');

    this.internalBroadcastChannel.onmessage = message => {
      if (message.data.type === 'file:upload:blob:complete') {
        console.log('project 1 got chunk complete event', message.data);
        this.currentFiles[message.data.name] = message.data.progress;
        console.log(this.currentFiles);
        this.changeDetectorRef.detectChanges();
      }
    };
  }

  ngOnInit() {
  }

  getCurrentFiles() {
    return Object.keys(this.currentFiles).map(key => ({ key, progress: this.currentFiles[key] }));
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      file.innerId = Math.floor(Math.random() * 10000);

      this.internalBroadcastChannel.postMessage({ type: 'file:upload:selected', file });
    }
  }
}
