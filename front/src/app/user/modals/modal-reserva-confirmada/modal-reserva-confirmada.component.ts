import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-reserva-confirmada',
  templateUrl: './modal-reserva-confirmada.component.html',
  styleUrls: ['./modal-reserva-confirmada.component.css']
})
export class ModalReservaConfirmadaComponent {

  public uid: string = "";

  ngOnInit(): void {
    // this.uid = Math.random().toString().replace(".","")
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 20; i++) {
      if (i % 4 == 1 && i > 4) {
        this.uid += "-"
      }
      this.uid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
}
