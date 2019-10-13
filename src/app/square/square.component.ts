

import {  Component,  OnInit,      } from "@angular/core";
import {trigger,style,transition,  animate} from "@angular/animations";
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  animations: [
    trigger("squareState", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("2500ms", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("2500ms", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SquareComponent implements OnInit {
  isVisible: boolean;

  ngOnInit() {
    this.isVisible = true;
  }
}