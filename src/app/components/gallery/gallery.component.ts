import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  students:any
  constructor() {
    this.students = [
     {
       studeid:1,
       name:"prashant",
       gender:"male",
     },
     {
      studeid:2,
      name:"shivam",
      gender:"male",
    },
    {
      studeid:3,
      name:"prashant kat",
      gender:"male",
    }
    ]
   }

  ngOnInit(): void {
  }

  identify(index:any, item:any){
    return item.i; 
 }

  getMoreStudent() :void{
    this.students = [
      {
        studeid:1,
        name:"prashant",
        gender:"male",
      },
      {
       studeid:2,
       name:"shivam",
       gender:"male",
     },
     {
       studeid:3,
       name:"prashant kat",
       gender:"male",
     },
     {
      studeid:4,
      name:"debika",
      gender:"female",
    }
     ]
  }

}
