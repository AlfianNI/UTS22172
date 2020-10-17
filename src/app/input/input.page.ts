import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const img = form.value.imgLink;
    const jenis = form.value.jenis;
    const harga = form.value.harga;
    this.router.navigate(['/admin']);
    
  }

}
