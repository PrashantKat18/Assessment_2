import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.css']
})
export class GalleryImgComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<GalleryImgComponent>) { }

  ngOnInit(): void {
    
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
