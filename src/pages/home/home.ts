import { BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner,
  private platform: Platform) {
  }

createCode(){
  this.createdCode = this.qrData;
}

scanCode(){
  if(this.platform.is('core') || this.platform.is('mobileweb')) {
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('OK');
      this.scannedCode = barcodeData.text;
    }, (err)=>{
      console.error(err);
    });
  } else {
    this.scannedCode = false;
  }

}
}
