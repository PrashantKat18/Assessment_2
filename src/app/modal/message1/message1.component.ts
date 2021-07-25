import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message1',
  templateUrl: './message1.component.html',
  styleUrls: ['./message1.component.css']
})
export class Message1Component implements OnInit {

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<Message1Component>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
