import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() icon?: IconDefinition;
  @Input() text?: string;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.btnClick.emit();
  }

}
