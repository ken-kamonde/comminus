import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {
  parcels: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.parcels = firestore.collection(environment.PARCELS).valueChanges();
  }
}
