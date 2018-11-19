import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Musicas } from '../../model/model';
import { MUSICAS } from '../../config/api.config';
import { Media, MediaObject } from '@ionic-native/media';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  musicas: Musicas[] = MUSICAS;
  tracks: any;
  currentTrack: any;
  progressInterval: any;
 
  constructor() { 
      this.tracks = [
        {id : 1, 
        imagem : "https://images-na.ssl-images-amazon.com/images/I/81gcQXWNsYL._SY355_.jpg", 
        titulo : "Stronger On Your Own", 
        artista : "Disturbed",
        duracao: "04:01",
        progress: 0,
        local:"../../assets/music/stronger on your own.mp3",
        reproduzindo:false
        },
        {id : 2, 
        imagem : "http://4.bp.blogspot.com/-BhkE4BHhoDw/UeTXmqvqqfI/AAAAAAAAAAk/ZE6rW1S8MFg/s1600/Capa.jpg", 
        titulo : "The Black", 
        artista : "Asking Alexandria",
        duracao: "04:42",
        progress: 0,
        local:"../../assets/music/the black.mp3",
        reproduzindo:false
        },

        {id : 3, 
        imagem : "https://a4-images.myspacecdn.com/images04/11/e8b0a409627c44ca8dd4a94b4538c53f/600x600.jpg", 
        titulo : "Moving On", 
        artista : "Asking Alexandria",
        duracao: "04:02",
        progress: 0,
        local:"../../assets/music/moving.mp3",
        reproduzindo:false
        },
  ];

      this.currentTrack = this.tracks[1];

  }
  
  //BOTÕES
  playTrack(track) {

      for (let checkTrack of this.tracks) {

          if (checkTrack.playing) {
              this.pauseTrack(checkTrack);
          }

      }

      track.playing = true;
      this.currentTrack = track;

      this.progressInterval = setInterval(() => {

          track.progress < 100 ? track.progress++ : track.progress = 0;

      }, 1000);

  }


  pauseTrack(track) {

      track.playing = false;
      clearInterval(this.progressInterval);
  }
  nextTrack() {

      let index = this.tracks.indexOf(this.currentTrack);
      index >= this.tracks.length - 1 ? index = 0 : index++;

      this.playTrack(this.tracks[index]);
  }

  prevTrack() {

      let index = this.tracks.indexOf(this.currentTrack);
      index > 0 ? index-- : index = this.tracks.length - 1;

      this.playTrack(this.tracks[index]);

  }

}