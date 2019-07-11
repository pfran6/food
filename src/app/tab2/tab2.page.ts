import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navCtrl: NavController, private barcodeScanner: BarcodeScanner) {}

  onLoadProduct() {
    this.navCtrl.navigateForward('tabs/tab2/product');
  }

  scanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.navCtrl.navigateForward('tabs/tab2/' + barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
