import { Component, signal }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { FlightModel }        from '../models/flights.model';
import { Utils }              from '../utils';
import { MatCardModule }      from '@angular/material/card';
import { DomSanitizer, SafeResourceUrl }    from '@angular/platform-browser';
import axios from 'axios';


@Component({
  imports:        [MatCardModule],
  selector:       'app-details',
  templateUrl:    './details.html',
  styleUrl:       './details.css',
})

export class Details {
  flight = signal<FlightModel | null>(null)

  constructor(route: ActivatedRoute , public utils: Utils , private sanitizer: DomSanitizer) {
    route.params.subscribe(params=>{
      const id = params['id']
      axios.get(`https://flight.pequla.com/api/flight/${id}`)
      .then(rsp => this.flight.set(rsp.data))
    })
  }

  getMapUrl(destination: string): SafeResourceUrl {
    const encoded = encodeURIComponent(destination);
    const url = `https://www.google.com/maps?q=${encoded}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
