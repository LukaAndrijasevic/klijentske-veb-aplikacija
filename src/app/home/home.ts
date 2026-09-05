import { Component, signal } from '@angular/core';
import axios from 'axios';
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  flights = signal<any>([])

  constructor() {
    axios.get('https://flight.pequla.com/api/flight/list?type=departure')
    .then(rsp=>this.flights.set(rsp.data))
  }
}
