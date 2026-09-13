import { Component, signal }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { FlightModel }        from '../models/flights.model';

import axios from 'axios';

@Component({
  imports:        [],
  selector:       'app-details',
  templateUrl:    './details.html',
  styleUrl:       './details.css',
})

export class Details {
  flight = signal<FlightModel | null>(null)

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params=>{
      const id = params['id']
      axios.get(`https://flight.pequla.com/api/flight/${id}`)
      .then(rsp => this.flight.set(rsp.data))
    })
  }
}
