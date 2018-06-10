import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-grizzlies',
  templateUrl: './grizzlies.component.html',
  styleUrls: ['./grizzlies.component.css']
})
export class GrizzliesComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'mem';
  bc:string ='IeNdmbS8R4Q';
  player: YT.Player;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player);
	}
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
