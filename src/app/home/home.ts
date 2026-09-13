import { Component, signal }   from '@angular/core';
import { FlightModel }         from '../../models/flight.model';
import { RouterLink }          from "@angular/router";
import { MatButtonModule}      from '@angular/material/button';
import { MatCardModule}        from '@angular/material/card';

import axios from 'axios';

@Component({
  imports: [RouterLink , MatButtonModule , MatCardModule],
  selector:     'app-home',
  templateUrl:  './home.html',
  styleUrl:     './home.css',
})
export class Home {
  flights = signal<FlightModel[]>([])

  constructor() {
    axios.get('https://flight.pequla.com/api/flight/list?type=departure')
      .then(rsp => this.flights.set(rsp.data))
  }
}
