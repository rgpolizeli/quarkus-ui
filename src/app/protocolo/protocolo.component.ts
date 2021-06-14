import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Protocolo} from '../models';

@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.css']
})
export class ProtocoloComponent implements OnInit {

	protocolo:Protocolo = new Protocolo(0,'');

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
	  this.route.queryParams.subscribe(
	  (queryParams: Params)=> {
            this.protocolo = new Protocolo(queryParams['n'], queryParams['d']);
          }
	  );
  }

}
