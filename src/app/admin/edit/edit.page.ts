import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ItemService } from 'src/app/home/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  loaded;
  constructor(
    private activatedRoute : ActivatedRoute,
    private itemService : ItemService,
    private alertCtrl : AlertController,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {

      if(!paramMap.has('id')){return;}
      const id = paramMap.get('id');
      if(id.includes('cpu')){
        this.loaded = this.itemService.getCPU(id);
      }
      else if(id.includes('ram')){
        this.loaded = this.itemService.getRAM(id);
      }
      else if(id.includes('gpu')){
        this.loaded = this.itemService.getGPU(id);
      }
      else if(id.includes('mb')){
        this.loaded = this.itemService.getMB(id);
      }
      
    });
  }

  onSubmit(form: NgForm){
    const img = form.value.imgLink;
    const model = form.value.model;
    const merek = form.value.merek;
    const chipset = form.value.chipset;
    const harga = form.value.harga;
    this.router.navigate(['/admin']);
    
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header:'Confirmation',
      message:'Yakin Mengubah?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },{
        text:'Yes',
        handler: () => this.router.navigate(['/admin'])
      }]
    });
    await alert.present();
  }

}
