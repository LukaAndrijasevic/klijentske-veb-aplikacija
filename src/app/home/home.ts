import { Component, signal }   from '@angular/core';
import { FlightModel }         from '../../models/flight.model';
import { RouterLink }          from "@angular/router";
import { MatButtonModule}      from '@angular/material/button';
import { MatCardModule}        from '@angular/material/card';
import {MatIconModule}         from '@angular/material/icon';
import { Utils }               from '../utils';

import axios from 'axios';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [RouterLink , MatButtonModule , MatCardModule , MatIconModule],
  selector:     'app-home',
  templateUrl:  './home.html',
  styleUrl:     './home.css',
})
export class Home {
  flights = signal<FlightModel[]>([])

  constructor(public utils: Utils) {
    localStorage.setItem('time', new Date().toISOString())
    axios.get<FlightModel[]>('https://flight.pequla.com/api/flight/list?type=departure')
      .then(rsp => {
        const sorted = rsp.data.sort((f1 , f2) => new Date(f1.scheduledAt).getTime() - new Date(f2.scheduledAt).getTime())
        this.flights.set(rsp.data)
    })
  }
}
