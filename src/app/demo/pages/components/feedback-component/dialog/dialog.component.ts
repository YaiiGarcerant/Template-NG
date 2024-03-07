// Angular Import
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
  imagePath: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  // constructor
  constructor(public dialog: MatDialog) {}

  // public method
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  DialogScroll() {
    this.dialog.open(DialogAnimationsScrollComponent);
  }

  InjectDataDialog() {
    this.dialog.open(DialogAnimationsInjectingDataComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  DialogElement() {
    this.dialog.open(DialogAnimationsElementComponent);
  }
}

// openDialog
@Component({
  selector: 'app-dialog-animations',
  template: `
    <div class="m-b-0 p-10 f-16 f-w-600">Delete file</div>
    <div class="p-10"> Would you like to delete cat.jpeg? </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button mat-dialog-close cdkFocusInitial color="primary">Ok</button>
    </div>
  `
})
export class DialogAnimationsComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsComponent>) {}
}

// DialogScroll
@Component({
  selector: 'app-dialog-animations-1',
  template: `
    <div class="m-b-0 f-16 f-w-600 p-20">Install Angular</div>
    <mat-divider></mat-divider>
    <mat-dialog-content>
      <h3>Develop across all platforms</h3>
      <span class="body-2"
        >Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For
        web, mobile web, native mobile and native desktop.</span
      >

      <h3>Speed &amp; Performance</h3>
      <p
        >Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.
        Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another
        push-model.</p
      >

      <h3>Incredible tooling</h3>
      <p
        >Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide
        array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes
        together so you can focus on building amazing apps rather than trying to make the code work.</p
      >

      <h3>Loved by millions</h3>
      <p
        >From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's
        largest applications.</p
      >

      <h3>What is Angular?</h3>

      <p
        >Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency
        injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build
        applications that live on the web, mobile, or the desktop</p
      >

      <h3>Architecture overview</h3>

      <p
        >Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in
        TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.</p
      >

      <p
        >The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules
        collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module
        that enables bootstrapping, and typically has many more feature modules.</p
      >

      <p
        >Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic
        and data. Every app has at least a root component.</p
      >

      <p
        >Components use services, which provide specific functionality not directly related to views. Service providers can be injected into
        components as dependencies, making your code modular, reusable, and efficient.</p
      >

      <p
        >Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how
        to use them.</p
      >

      <p
        >The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with
        Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.</p
      >

      <p
        >The metadata for a service class provides the information Angular needs to make it available to components through Dependency
        Injection (DI).</p
      >

      <p
        >An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define
        navigation paths among views. The router provides sophisticated in-browser navigational capabilities.</p
      >
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial color="primary">Install</button>
    </mat-dialog-actions>
  `
})
export class DialogAnimationsScrollComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsScrollComponent>) {}
}

// InjectDataDialog
@Component({
  selector: 'app-dialog-animations-injecting-data',
  template: `
    <div class=" m-b-0 p-10 f-16 f-w-600">Favorite Animal</div>
    <mat-divider></mat-divider>
    <div mat-dialog-content>
      My favorite animal is:
      <ul style="list-style: inside; padding-left: 0px">
        <li>
          @if (data.animal === 'panda') {
            <span>&#10003;</span>
          }
          Panda
        </li>
        <li>
          @if (data.animal === 'unicorn') {
            <span>&#10003;</span>
          }
          Unicorn
        </li>
        <li>
          @if (data.animal === 'lion') {
            <span>&#10003;</span>
          }
          Lion
        </li>
      </ul>
    </div>
  `
})
export class DialogAnimationsInjectingDataComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

// DialogElement
@Component({
  selector: 'app-dialog-animations',
  template: `
    <div class="m-b-0 p-10 f-16 f-w-600">Dialog with elements</div>
    <div class="p-10">This dialog showcases the title, close, content and actions elements.</div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `
})
export class DialogAnimationsElementComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsElementComponent>) {}
}
