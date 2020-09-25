import { Injectable } from '@angular/core';
import { WindowInterface } from './interfaces';
import { BehaviorSubject } from 'rxjs';
import { TaskManagerService } from 'src/app/services/managers/task-manager/task-manager.service';
import { TopPanelManagerService } from 'src/app/services/panel/top-panel-manager/top-panel-manager.service';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class WindowsManagerService {
  openedWindows: BehaviorSubject<Array<WindowInterface>> = new BehaviorSubject<
    Array<WindowInterface>
  >([]);

  constructor(
    protected taskManagerService: TaskManagerService,
    protected topPanelManagerService: TopPanelManagerService,
    protected apiService: ApiService
  ) {}

  bringToFront(pid: number) {
    let currentWindow: WindowInterface;
    let newWindows: Array<WindowInterface> = this.openedWindows.value;
    newWindows.forEach((window) => {
      if (window.pid === pid) {
        window.zIndex = this.getMaxWindowZIndex() + 1;
        currentWindow = window;
      }
    });
    this.openedWindows.next(newWindows);
    this.topPanelManagerService.title.next(currentWindow.name);
  }

  openWindowByPackageName(packageName: string, args: Object = {}): void {
    /// Register the task
    const pid: number = this.taskManagerService.registerTask(packageName);

    /// Register the window
    this.apiService.serveApplicationByPid(pid, args).subscribe(
      (res: WindowInterface) => {
        let newWindows: Array<WindowInterface> = this.openedWindows.value;
        res['zIndex'] = this.getMaxWindowZIndex() + 1;
        newWindows.push(res);

        /// Make the window visible
        this.openedWindows.next(newWindows);
        this.topPanelManagerService.title.next(res.title);
      },
      () => {
        /// Remove the task because system is unable to start the window
        this.taskManagerService.disposeTaskByPid(pid);
      }
    );
  }

  getMaxWindowZIndex(): number {
    let zIndex: number = 1e3;
    this.openedWindows.value.forEach((window) => {
      if (window.zIndex > zIndex) zIndex = window.zIndex;
    });
    return zIndex;
  }

  closeWindowByPid(pid: number): void {
    /// Dispose/Unregister the window task
    this.taskManagerService.disposeTaskByPid(pid);

    /// Dispose off the window
    this.openedWindows.next(
      this.openedWindows.value.filter((window: WindowInterface) => {
        return window.pid != pid;
      })
    );
  }
}
