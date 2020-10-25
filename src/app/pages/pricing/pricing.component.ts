import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

	banner_title: string = "Our Packages";
	banner_description: string = "No downpayment or initial cashout, you pay once you get your product from us."
	quote_btn_label: string = "Get a quote";
	message_btn_label: string = "Send a message";
	capitalize: boolean = true;

	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0)
	}

}
