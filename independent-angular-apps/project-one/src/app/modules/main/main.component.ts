import { ChangeDetectorRef, Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { fromByteArray } from 'base64-js';
import { LoggerService, CallService, CALL_SERVICE, LOGGER_SERVICE } from 'project-one-typings';
import {FileUploadServiceProxy} from '../services/fileUploadServiceProxy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  private internalBroadcastChannel = null;
  private currentFiles = {};
  private blobSize = 1000;

  public callNumber: number;
  public onCall: boolean;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly fileUploadService: FileUploadServiceProxy,
    @Inject(LOGGER_SERVICE) private readonly logger: LoggerService,
    @Inject(CALL_SERVICE) private readonly callService: CallService) {
  }

  public ngOnInit(): void {
    this.logger.log('Logger works in project one!!!');
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

    this.callService.onDialogStarted().subscribe((callNumber: number) => {
      this.onCall = true;
    });
    this.callService.onDialogFinished().subscribe(() => {
      this.onCall = false;
    });
  }

  public makeCall(): void {
    this.callService.startCall(this.callNumber);
  }

  public dropCall(): void {
    this.callService.endCall();
  }

  public ngOnDestroy(): void {
    this.internalBroadcastChannel.close();
  }

  public getCurrentFiles(): ReadonlyArray<any> {
    return Object.keys(this.currentFiles).map(key => ({ key, progress: this.currentFiles[key] }));
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const innerId = Math.floor(Math.random() * 10000);

      this.fileUploadService.startUploadingFile(file, innerId);
      this.internalBroadcastChannel.postMessage({ type: 'file:upload:selected', file });
    }
  }
}
