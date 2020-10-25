import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	routes = [
		{
			label: 'Our Story',
			route: '/story'
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
			route: '/contact-us'
		}
	]

	button_label: string = "Get a Quote"
	capitalize: boolean = true;

	constructor() { }

	ngOnInit() {
	}

}
