// Angular
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

// Other
import { ModalEditComponent } from "src/app/commons/modals/modal-edit/modal-edit.component";
import AgencyService from "src/app/services/agency.service";
import { IAgencyResponse } from "src/app/commons/models/agency.model";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public agencyData: Array<IAgencyResponse>;
  public link: string;
  public isLoading: boolean;

  constructor(public dialog: MatDialog, public agencyService: AgencyService) {
    this.isLoading = false;
    this.agencyData = [];
    this.link = "lista";
  }

  public ngOnInit() {
    this.getInformation();
    this.agencyService.updateValue$.asObservable().subscribe((data) => {
      this.agencyData = data;
    });
  }

  public changeView(link: string) {
    this.link = link;
  }

  public getInformation(): void {
    this.agencyService.agencyInfo.pipe(delay(2000)).subscribe((response) => {
      if (JSON.parse(localStorage.getItem("agency")!)) {
        this.agencyData = JSON.parse(localStorage.getItem("agency")!);
      } else {
        this.agencyService.store("agency", response);
        this.agencyData = response;
      }
      this.isLoading = true;
    });
  }

  public onModalEdit(dataEdit: IAgencyResponse, index: number) {
    this.dialog.open(ModalEditComponent, {
      width: "489px",
      panelClass: "custom-container-no-padding",
      data: {
        title: "Editar agencia seleccionada",
        id: index,
        dataEdit,
      },
    });
  }

  public goToLink(lat, lon) {
    let url =
      "https://www.google.com/maps/search/?api=1&query=" +
      lon.toString() +
      "," +
      lat.toString();
    window.open(url, "_blank");
  }
}
