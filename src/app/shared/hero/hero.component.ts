import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	@Input() hero_title: string;
	@Input() hero_description: string;
	button_label: string = "Our Works";
	capitalize: boolean = true;

	constructor() { }

	ngOnInit() {
	}

}
