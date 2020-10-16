import { Component, OnInit } from '@angular/core';
import { CPU, GPU, Motherboard, RAM } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cpu: CPU[];
  ram:RAM[];
  motherboard:Motherboard[];
  gpu:GPU[];

  constructor(private itemService: ItemService) {}

  ngOnInit(){
    this.cpu = this.itemService.getAllCPU();
    this.ram = this.itemService.getAllRAM();
    this.motherboard = this.itemService.getAllMother();
    this.gpu = this.itemService.getAllGPU();
  }
}
