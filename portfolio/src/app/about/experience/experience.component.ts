import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experience = [
    {
      year: 2017,
      title: 'Software Engineer',
      company: 'Novare Technologies, Inc.'
    },
    {
      year: 2019,
      title: 'Senior Software Engineer',
      company: 'Novare Technologies, Inc.'
    },
    {
      year: 2020,
      title: 'Software Engineering Lead',
      company: 'Novare Technologies, Inc.'
    },
    {
      year: 2021,
      title: 'Front-end Software Engineer',
      company: 'Manulife Philippines'
    },
    {
      year: 2021,
      title: 'Software Developer - Fullstack',
      company: 'Globe Telecom, Inc.'
    }
  ]

}
