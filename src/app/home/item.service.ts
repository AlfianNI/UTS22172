import { Injectable } from '@angular/core';
import { CPU, GPU, Motherboard, RAM } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private cpu: CPU[]=[
    {
      id:'cpu1',
      foto:'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/11/22/13152000/13152000_f4b81e52-6de9-4840-8ea7-d02427798d4f_700_700.jpg',
      merek:'Intel',
      model:'I9 9900K',
      baseclk:'3.60 GHz',
      boostclk:'5.00 GHz',
      core:'8',
      thread:'16',
      harga:'10000',
      stok:'10'
    }
  ];

  private ram: RAM[]=[
    {
      id:'ram1',
    foto:'https://static.bmdstatic.com/pk/product/medium/CORSAIR-Memory-PC-1-x-8GB-DDR4-CMSO8GX4M1A2133C15--SKU00316113-201612010152.png',
    merek:'Corsair',
    model:'Memory Notebook 1 x 8GB DDR4',
    speed: '2133MHz',
    ukuran: 'PC4-17000',
    harga: '5000',
    stok: '10'
    }
  ];

  private motherboard: Motherboard[]=[
    {
      id:'mb1',
    foto:'https://images-na.ssl-images-amazon.com/images/I/51rhTydYBOL._AC_.jpg',
    merek:'Intel',
    model:'Motherboard LGA1155 DDR3',
    chipset:'Core i7, i5, and i3',
    processor:'Intel',
    harga:'10000',
    stok:'5'
    }
  ];

  private gpu: GPU[]=[
    {
      id:'gpu1',
      foto:'https://cf.shopee.co.id/file/8b152e3131fbe35d7c0495f96ec4149f',
      merek:'NVIDIA',
      model:'Geforce GTX 960',
      harga:'10000',
      stok:'4'
    }
  ]
  
  constructor() { }

  getAllCPU(){
    return[...this.cpu];
  }
  getAllGPU(){
    return[...this.gpu];
  }
  getAllMother(){
    return[...this.motherboard];
  }
  getAllRAM(){
    return[...this.ram];
  }

  getCPU(CPUid:string){
    return{...this.cpu.find(cpu=>{
      return cpu.id === CPUid;
    })};
  };

  getGPU(GPUid:string){
    return{...this.gpu.find(gpu=>{
      return gpu.id === GPUid;
    })};
  };

  getRAM(RAMid:string){
    return{...this.ram.find(ram=>{
      return ram.id === RAMid;
    })};
  };

  getMB(MBid:string){
    return{...this.motherboard.find(motherboard=>{
      return motherboard.id === MBid;
    })};
  };

  deleteItem(itemId: string){
    if(itemId.includes('cpu')){
      this.cpu = this.cpu.filter(item=>{
        return item.id !== itemId;
      });
    }
  }





}
