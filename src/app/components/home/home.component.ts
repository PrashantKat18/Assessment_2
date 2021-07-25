import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState : boolean = false;
  panelOpenState1 : boolean = false;
  showScroll: any;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  viewType = 7;
  leftCurly = '{';
  rightCurly = '}';
  searchValue:any;
  // search:string = ""
  // searchKeywords: string | undefined;
  constructor(public authService:AuthService) { 
  }

  ngOnInit(): void {
    AOS.init({
      offset:100,
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
    {
        this.showScroll = true;
    } 
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
    { 
      this.showScroll = false; 
    }
  }

  scrollToTop() 
    { 
      (function smoothscroll() 
      { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        if (currentScroll > 0) 
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
  }
 

  changeView(i: number) {
    this.viewType = i;
  }

  getSearchValue(search:string){
   this.authService.getSearch(search).subscribe((result)=>{
     this.searchValue = result;
   })
  }

}
