import { Component }      from '@angular/core';
import { MatCardModule }  from '@angular/material/card';

@Component({
  imports:  [
            MatCardModule
            ],
  selector:     'app-loading',
  templateUrl:  './loading.html',
  styleUrl:     './loading.css',
})

export class Loading {

}
