import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {

	banner_title: string = "Our Services";
	banner_description: string = "We are continuously harnessing technology to improve our clients' businesses. We can do it for you too."

	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0)
	}

}
