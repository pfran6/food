import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {error} from "selenium-webdriver";

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  private barcode: string;
  private brands: string;
  private productName: string;
  private erreur = false;

  private IP = '172.23.2.36';

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.barcode = this.route.snapshot.paramMap.get('barcodeData');
    console.log('Data: ' + this.barcode);
    // https://world.openfoodfacts.org/api/v0/product/' + this.barcode + '.json
    // https://world.openfoodfacts.org/api/v0/product/737628064502.json
    // http://' + this.IP + ':3000/products/' + this.barcode
    this.httpClient.get('http://' + this.IP + '/products/' + this.barcode).subscribe(
        data => {
            if (data != null) {
                console.log(data);
                this.brands = data['brands'];
                this.productName = data['product_name'];
            } else {
                this.erreur = true;
            }
        },
        error => {
          console.log('Error get: ' + error);
        }
    );
  }

}
