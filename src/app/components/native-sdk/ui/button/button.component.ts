import { Component, Input, OnInit } from '@angular/core';
import { NativeSDKExceptionService } from '../../services/exceptions/exceptions.service';

@Component({
  selector: 'NativeButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class NativeButton implements OnInit {
  X: number = 0;
  Y: number = 0;

  @Input('isOutlined') isOutlined: boolean = false;
  @Input('isDisabled') isDisabled: boolean = false;
  @Input('innerComponent') innerComponent: HTMLElement;
  @Input('innerText') innerText: string = '';
  @Input('overflow') overflow: 'clip' | 'ellipsis';
  @Input('width') width: number;
  @Input('icon') icon: string;
  @Input('nutellaIcon') nutellaIcon: string;
  @Input('height') height: number = 2;

  constructor(protected exceptionService: NativeSDKExceptionService) {}

  move($event: MouseEvent) {
    this.X = $event.clientX;
    this.Y = $event.clientY;
  }

  ngOnInit(): void {
    if (!this.innerText && !this.innerComponent)
      this.exceptionService.AssertionException(
        `Expected data inside button for rendering got "null"`
      );

    if (this.icon && this.nutellaIcon)
      this.exceptionService.AssertionException(
        `Expected only one icon to render but got two. Either use Nutella or custom icon. Both aren't allowed at the same time.`
      );
  }
}
