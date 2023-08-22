import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  showOptions = false;
  title: string = "Portfolio"
  desc: string = "Throughout my journey as a Software Developer, I've had the privilege of working on a diverse array of projects. My portfolio showcases a selection of these ventures, each of which has challenged me to push my boundaries and grow both professionally and personally. From large-scale enterprise applications to small-scale passion projects, each endeavor has contributed to my growth as a developer.";
  role: string = '';
  responsibility: string = '';
  url: string = ''
  projects = [
    {
      title: 'Portfolio',
      desc: "The Portfolio is a platform dedicated to showcasing my career milestones and expertise in an interactive and visually appealing manner. It's not just a static CV; it's a dynamic space where visitors can gain insights into my professional background, projects, and the value I bring to the table.",
      role: 'Front-end Developer',
      responsibility: 'Design, implementation, deployment',
      url: 'https://github.com/joycedzone/portfolio'
    },
    {
      title: 'TelcoChat',
      desc: 'TelcoChat is a next-generation chatbot designed to enhance customer experiences within the telecommunications domain. With an array of advanced features, it streamlines customer inquiries, troubleshoots issues, and offers real-time assistance. Whether you need help with billing, technical support, or service activation, TelcoChat is here to provide instant solutions.',
      role: 'Developer, Development Lead',
      responsibility: 'Solution, implementation, deployment',
      url: ''
    },
    {
      title: 'ARCS',
      desc: 'ARCS is an integrated solution designed to streamline the recruitment process and crew management while introducing an innovative assessment approach. From submitting CVs to conducting exams, this system ensures a seamless experience for both applicants and recruiters.',
      role: 'Back-end Developer (API)',
      responsibility: 'Solution, implementation, deployment ',
      url: ''
    },
    {
      title: 'TelcoShop',
      desc: 'TelcoShop redefines the way customers engage with telecom services. It offers an intuitive and convenient interface for users to manage their mobile services, purchase products, and stay connected effortlessly.',
      role: 'Full-stack Developer',
      responsibility: 'Solution, implementation, deployment ',
      url: ''
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
