import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryImgComponent } from 'src/app/modal/gallery-img/gallery-img.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  students:any
  constructor(public dialog: MatDialog) {
   }

  ngOnInit(): void {
  }

  showImg(img: any){
    console.log(img);
    this.dialog.open(GalleryImgComponent, {
      // width: '500px',
      data: img
    });
    
  }

  images = [
    {
      "clgImg" : "../../../assets/clg1.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg2.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg3.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg4.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg1.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg2.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg3.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg2.jpeg"
    },
    {
      "clgImg" : "../../../assets/clg3.jpeg"
    }
  ]


}
