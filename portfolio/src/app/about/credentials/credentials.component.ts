import { Component } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {
  showEducation = false;
  showWork = true;
  showCertifications = false;
  credentials: any;

  education = [
    {
      year: 2009,
      title: 'High School',
      subTitle: 'Siena College of Quezon City'
    },
    {
      year: 2013,
      title: "Bachelor's Degree - Information Technology",
      subTitle: 'Pamantasan ng Lungsod ng Manynila'
    },
    {
      year: 2017,
      title: "Bootcamp",
      subTitle: 'Novare Technologies, Inc.'
    }
  ];

  experience = [
    {
      year: 2017,
      title: 'Software Engineer',
      subTitle: 'Novare Technologies, Inc.'
    },
    {
      year: 2019,
      title: 'Senior Software Engineer',
      subTitle: 'Novare Technologies, Inc.'
    },
    {
      year: 2020,
      title: 'Software Engineering Lead',
      subTitle: 'Novare Technologies, Inc.'
    },
    {
      year: 2021,
      title: 'Front-end Software Engineer',
      subTitle: 'Manulife Philippines'
    },
    {
      year: 2021,
      title: 'Software Developer - Fullstack',
      subTitle: 'Globe Telecom, Inc.'
    }
  ];

  certifications = [
    {
      year: 2019,
      title: 'Professional Scrum Developer I',
      subTitle: 'Scrum.org'
    }
  ];

  ngOnInit(): void {
    this.credentials = this.experience;
  }

  toggle(id: string) {
    const elements = document.getElementsByClassName('label')
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].id != id) {
        document.getElementById(elements[i].id)?.classList.remove('active')
      } else {
        document.getElementById(elements[i].id)?.classList.add('active')
      }
    }

    switch (id) {
      case 'edu':
        this.showEducation = true;
        this.showWork = false;
        this.showCertifications = false;
        this.credentials = this.education;
        break;

      case 'work':
        this.showWork = true;
        this.showEducation = false;
        this.showCertifications = false;
        this.credentials = this.experience;
        break;

      case 'cert':
        this.showCertifications = true;
        this.showWork = false;
        this.showEducation = false;
        this.credentials = this.certifications;
        break;
    }
  }
}
