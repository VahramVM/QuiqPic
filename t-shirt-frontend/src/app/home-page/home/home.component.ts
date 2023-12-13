import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('simulator_block') block: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }


  scroll() {
    this.block.nativeElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
}
