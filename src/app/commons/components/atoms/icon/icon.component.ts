import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { I_IconMode, I_IconType } from "./icon.interface";

@Component({
  selector: "bcp-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent implements OnInit, OnChanges {
  @Input() name: string = "face";
  @Input() size: string = "24";
  @Input() color: string = "dark";
  @Input() type: I_IconType = "outlined";
  @Input() mode: I_IconMode = "default";

  public classes!: Array<string>;

  ngOnInit() {
    this.classes = [
      "bcp-icon-material",
      "bcp-icon-material--" + this.type,
      "bcp-icon-material__mode-" + this.mode,
    ];
  }

  ngOnChanges() {
    this.classes = [
      "bcp-icon-material",
      "bcp-icon-material--" + this.type,
      "bcp-icon-material__mode-" + this.mode,
    ];
  }
}
