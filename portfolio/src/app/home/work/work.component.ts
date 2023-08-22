import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  showOptions = false;
  title: string = "Portfolio"
  desc: string = "This is a showcase of my best work in a variety of fields including Graphic and Web Design, No-Code Development, Product Design and Product Management.The world of digital design and development is constantly evolving and so has my role over the last 15 years. I'm still learning and gaining new skills every day.";
  role: string = '';
  responsibility: string = '';
  url: string = ''
  projects = [
    {
      title: 'Portfolio',
      desc: "A web application developed thru Angular. This application showcases the developer's best work. A web application developed thru Angular. This application showcases the developer’s best work",
      role: 'Front-end Developer',
      responsibility: 'Design, implementation, deployment',
      url: 'github.com.ph'
    },
    {
      title: 'Chatbot',
      desc: 'A conversational interface solution that provides automated customer service for different businesses via chatbot.',
      role: 'Developer, Development Lead',
      responsibility: 'Solution, implementation, deployment',
      url: 'github.com.ph'
    },
    {
      title: 'ARCS',
      desc: 'Automated Recruitment and Crewing System. A system used for recruitment. Consists of three web applications: (1) Application Portal, (2) Back-office Portal, adn (3) Exam Portal',
      role: 'Back-end Developer (API)',
      responsibility: 'Solution, implementation, deployment ',
      url: 'github.com.ph'
    },
    {
      title: 'Digital Shop',
      desc: 'A web application that allows users to create account transactions: acquisition, renewal, reloading, etc.',
      role: 'Full-stack Developer',
      responsibility: 'Solution, implementation, deployment ',
      url: 'github.com.ph'
    }
  ];

  selectProject(selected: any) {
    this.title = selected.title;
    this.desc = selected.desc;
    this.role = selected.role;
    this.responsibility = selected.responsibility;
    this.url = selected.url;
    this.showOptions = false;

    const elements = document.getElementsByClassName('dropdown-item')
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].id != selected.title) {
        document.getElementById(elements[i].id)?.classList.remove('active')
      } else {
        document.getElementById(elements[i].id)?.classList.add('active')
      }
    }
  }

}
