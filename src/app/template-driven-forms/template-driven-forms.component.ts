import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-template-driven-forms",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./template-driven-forms.component.html",
  styleUrl: "./template-driven-forms.component.css",
})
export class TemplateDrivenFormsComponent {
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}
