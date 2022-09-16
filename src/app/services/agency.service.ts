import { Injectable, OnDestroy } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { IAgencyResponse } from "../commons/models/agency.model";

@Injectable({
  providedIn: "root",
})
export default class AgencyService implements OnDestroy {
  public agencyInfo: Observable<Array<IAgencyResponse>> = of([
    {
      id: 0,
      agencia: "Las Flores",
      distrito: "San Juan De Lurigancho",
      provincia: "Lima",
      departamento: "Lima",
      direccion: "Las Flores de Primavera 1487",
      lat: -77.01232817,
      lon: -12.0046896,
      img: "https://ancashnoticias.com/wp-content/uploads/2021/01/bcp.jpg",
    },
    {
      id: 1,
      agencia: "Punchana",
      distrito: "Punchana",
      provincia: "Maynas",
      departamento: "Loreto",
      direccion: "Av. La Marina N° 944",
      lat: -73.240647,
      lon: -3.731367,
      img: "https://larepublica.pe/resizer/T_kYKIr__8qX03lXT-PYohNYktU=/538x0/top/larepublica.pe/resizer/2DM1YsUBAGp80gNU7ao4CIbH4ZQ=/538x0/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/72L5WXHSXJCAJJMIGFISWRW62Q.png",
    },
    {
      id: 2,
      agencia: "Conquistadores",
      distrito: "San Isidro",
      provincia: "Lima",
      departamento: "Lima",
      direccion: "Av. Conquistadores 968",
      lat: -77.03735314,
      lon: -12.10568371,
      img: "https://e.rpp-noticias.io/medium/2020/12/16/141014_1035697.jpg",
    },
    {
      id: 3,
      agencia: "Salvador Allende",
      distrito: "Villa Maria del Triunfo",
      provincia: "Lima",
      departamento: "Lima",
      direccion: "Av. Salvador Allende 468 – Villa María del Triunfo",
      lat: -76.957646,
      lon: -12.158153,
      img: "https://larepublica.pe/resizer/PWGFhulfHcNirf0i5j9-drAyKUI=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/J4EHVQW4N5ARDOSOKE4EFJHHC4.jpg",
    },
  ]);

  public updateValue$: Subject<Array<IAgencyResponse>>;

  constructor() {
    this.updateValue$ = new Subject();
  }

  public store(key: string, data: Array<IAgencyResponse>): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getStorage() {
    let storeValue = JSON.parse(localStorage.getItem("agency")!);
    return storeValue;
  }

  public updateStorage(id: number, data?: Array<IAgencyResponse>) {
    this.store(
      "agency",
      this.getStorage().map((x) => (x.id === id ? data : x))
    );
    this.agencyInfo = this.getStorage();
    this.updateValue$.next(this.getStorage());
  }

  public ngOnDestroy() {
    this.updateValue$.complete();
  }
}
