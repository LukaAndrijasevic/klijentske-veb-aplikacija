import { Component, signal }  from '@angular/core';
import { FlightModel }        from '../../models/flight.model';
import { RouterLink }         from "@angular/router";

import axios from 'axios';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  flights = signal<FlightModel[]>([])

  constructor() {
    axios.get('https://flight.pequla.com/api/flight/list?type=departure')
      .then(rsp => this.flights.set(rsp.data))
  }
}
