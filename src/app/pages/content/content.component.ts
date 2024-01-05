import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() photoCover: string =
    'https://images.unsplash.com/photo-1701962541409-e2c1256a8574?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  @Input() contentTitle: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  @Input()
  contentDescription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
  ullam libero consequatur a, itaque cupiditate voluptatibus iusto molestiae
  dolorum ipsa blanditiis recusandae. Quibusdam eos est debitis. Distinctio
  nobis consequuntur praesentium. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Exercitationem ullam libero consequatur a, itaque
  cupiditate voluptatibus iusto molestiae dolorum ipsa blanditiis
  recusandae. Quibusdam eos est debitis. Distinctio nobis consequuntur
  praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Exercitationem ullam libero consequatur a, itaque cupiditate voluptatibus
  iusto molestiae dolorum ipsa blanditiis recusandae. Quibusdam eos est
  debitis. Distinctio nobis consequuntur praesentium. Lorem ipsum dolor sit
  amet consectetur adipisicing elit. Exercitationem ullam libero consequatur
  a, itaque cupiditate voluptatibus iusto molestiae dolorum ipsa blanditiis
  recusandae. Quibusdam eos est debitis. Distinctio nobis consequuntur
  praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Exercitationem ullam libero consequatur a, itaque cupiditate voluptatibus
  iusto molestiae dolorum ipsa blanditiis recusandae. Quibusdam eos est
  debitis. Distinctio nobis consequuntur praesentium.`;
}
