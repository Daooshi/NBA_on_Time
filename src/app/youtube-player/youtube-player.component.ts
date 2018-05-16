import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

	savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
	}
  onStateChange(event){
    console.log('player state', event.data);
  }

}
