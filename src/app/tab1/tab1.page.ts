import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private barcode: string;

  constructor(private navCtrl: NavController) {}

  onLoadProduct() {
    this.navCtrl.navigateForward('tabs/tab1/' + this.barcode);
  }

}
