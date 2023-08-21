import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  showFe = false;
  showBe = false;
  showOthers = false;

  toggle(id: string) {
    switch(id) {
      case 'fe':
        this.showFe = !this.showFe;
        this.showBe = false;
        this.showOthers = false;
        break;

      case 'be':
        this.showBe = !this.showBe;
        this.showFe = false;
        this.showOthers = false;
        break;

      case 'others':
        this.showOthers = !this.showOthers;
        this.showFe = false;
        this.showBe = false;
    }
  }
}
