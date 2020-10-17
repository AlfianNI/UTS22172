import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CPU, GPU, Motherboard, RAM } from '../home/item.model';
import { ItemService } from '../home/item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  cpu: CPU[];
  ram: RAM[];
  motherboard:Motherboard[];
  gpu:GPU[];

  constructor(private itemService : ItemService, private alertCtrl : AlertController, private router: Router) { }

  ngOnInit() {
    this.cpu = this.itemService.getAllCPU();
    this.ram = this.itemService.getAllRAM();
    this.motherboard = this.itemService.getAllMother();
    this.gpu = this.itemService.getAllGPU();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header:'Confirmation',
      message:'Yakin Menghapus?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },{
        text:'Delete',
        handler: () => this.deleteItem()
      }]
    });
    await alert.present();
  }

  deleteItem(){

  }

}
