import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { WpApiService } from '../../core/services/wp-api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	@ViewChild('owlElement') owlElement: OwlCarousel

	content_ready: boolean = false;

	hero_title: string;
	hero_description: string;
	portfolio_button_label: string = "Go to Portfolio"
	contact_button_label: string = "Send a message"
	capitalize_button: boolean = true;

	// Services Section
	services_title: string;
	services_desc: string;
	services: any[];
	services_button_label: string = "Get Free Quote"

	// How We Do It Section
	how_title: string;
	how_desc: string;
	how_items: any[];

	// CTA Section
	cta_title: string;
	cta_desc: string;

	carousel_slides = [
		'assets/media-resources/placeholder.jpg',
		'assets/media-resources/placeholder2.jpg',
		'assets/media-resources/placeholder3.jpg',
		'assets/media-resources/placeholder4.jpg',
		'assets/media-resources/placeholder5.jpg',
		'assets/media-resources/placeholder6.jpg',
		'assets/media-resources/placeholder7.jpg'
	]

	slideConfig = {
		slidesToShow: 4, 
		slidesToScroll: 2, 
		centerMode: true, 
		autoplay: true, 
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	};

	constructor(
		private _api: WpApiService
	) { }

	ngOnInit() {
		window.scrollTo(0, 0)
		this.getPageContent();
	}
	
	getPageContent() {
		this._api.home_page_content().subscribe(
			(data: any) => {
				console.log(data);
				
				this.hero_title = data.acf.big_intro;
				this.hero_description = data.acf.outro;

				this.services_title = data.acf.services_intro;
				this.services_desc = data.acf.services_description;
				this.services = data.acf.services_item;

				this.how_title = data.acf.how_intro;
				this.how_desc = data.acf.how_description;
				this.how_items = data.acf.how_item;

				this.cta_title = data.acf.cta_title;
				this.cta_desc = data.acf.cta_description;

				setTimeout(() => {
					this.content_ready = true;
				}, 1000)
			}
		)
	}
 
	slickInit(e) {
	}
	
	breakpoint(e) {
	}
	
	afterChange(e) {
	}
	
	beforeChange(e) {
	}
}
