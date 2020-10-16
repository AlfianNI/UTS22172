import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CPU, GPU, Motherboard, RAM } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loaded;
  constructor(
    private activatedRoute : ActivatedRoute,
    private itemService : ItemService
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

}
