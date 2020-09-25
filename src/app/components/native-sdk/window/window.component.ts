import { Component, Input, OnInit } from '@angular/core';
import { WindowInterface } from '../services/window-manager/interfaces';
import { WindowsManagerService } from '../services/window-manager/window-manager.service';

@Component({
  selector: 'Window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit {
  @Input('window')
  window: WindowInterface;

  constructor(private windowsManagerService: WindowsManagerService) {}

  ngOnInit(): void {}

  bringToFront(): void {
    this.windowsManagerService.bringToFront(this.window.pid);
  }

  closeWindow() {
    this.windowsManagerService.closeWindowByPid(this.window.pid);
  }

  log(v: any) {
    console.log(v);
  }
}
