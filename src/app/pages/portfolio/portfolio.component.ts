import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
	banner_title: string = "Our Portfolio";
	banner_description: string = "From ideas turned into carefully crafted pixels and problems crafted into solutions."
	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0)
	}

}
