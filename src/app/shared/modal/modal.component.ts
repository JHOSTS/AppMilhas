import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { BotaoControleComponent } from '../botao-controle/botao-controle.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ MatDialogContent, MatDialogActions, MatButtonModule, MatChipsModule, MatDividerModule, BotaoControleComponent, MatIconModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
