import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	routes = [
		{
			label: 'Our Story',
			route: '/our-story'
		},
		{
			label: 'Services',
			route: '/services'
		},
		{
			label: 'Pricing',
			route: '/pricing'
		},
		{
			label: 'Portfolio',
			route: '/portfolio'
		},
		{
			label: 'Contact Us',
			route: '/contact'
		},
		{
			label: 'FAQs',
			route: '/faqs'
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
