import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	banner_title: string = "Let's Talk"
	banner_description: string = "Tell us what you need and we'll see how we can help."

	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0)
	}

}
