import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {ApiService} from '../Services/Api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Classes/user';
@Component({
  selector: 'app-prono-page',
  templateUrl: './prono-page.component.html',
  styleUrls: ['./prono-page.component.css']
})
export class PronoPageComponent implements OnInit {
  user: User;
  leMatch;
  idMatch: string;
  isUpdate: boolean;
  oldProno;
  private sub: any;
  today = Date.now();

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    const data = JSON.parse(localStorage.getItem('currentUser'));
    if (data) {
      this.user = new User(data.user);
    }
  }

  ngOnInit() {
    this.oldProno = {
      goals1: 0,
      goals2: 0
    };

    this.sub = this.route.params.subscribe(params => {
      this.idMatch = params['id']; // (+) converts string 'id' to a number

      this.api.fetch('get', 'matchs/' + this.idMatch, null).then((match: any) => {
        this.leMatch = match.data;
      });

      // utilsateur a retirer plus tard
      // ici on definit si c'est un ajout ou une maj
      this.api.fetch('get', 'pronos/?match_id=' + this.idMatch + '&utilisateur_id=' + this.user._id, null).then((prono: any) => {
        if (prono.data.length > 0) {
          this.isUpdate = true;
          this.oldProno = prono.data[0];
        } else {
          this.isUpdate = false;
        }
      });


    });
  }

  isFuturMatch() {
    if (new Date(this.leMatch.date).getTime() > new Date(this.today).getTime()) {
      return true;
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onPronoSubmit(scoreA, scoreB) {
    // Ajouter jwt pour connaitre user
    console.log('new prono' , scoreA + '-' + scoreB);
    if (!this.isUpdate) {
      const newProno = {
        match_id : this.idMatch,
        utilisateur_id : this.user._id,
        goals1: scoreA,
        goals2: scoreB,
      };

      // ajouté header avec jwt pour l'user et req.user.id coté api ?
      this.api.fetch('post', 'pronos', newProno).then(() => {
        window.alert('Votre prono a été ajouté');
        this.router.navigateByUrl('/');
      }).catch(err => {
        window.alert('Erreur : Impossible d\'ajouter le prono veuillez rééssayer plus tard');
      });
    } else {

      // ajouté header avec jwt pour l'user et req.user.id coté api ?
      this.api.fetch('patch', 'pronos', this.oldProno).then(() => {
        window.alert('Votre prono a été mis à jour');
        this.router.navigateByUrl('/');
      }).catch(err => {
        window.alert('Erreur : Impossible de mettre à jour le prono');
      });
    }
  }

}
