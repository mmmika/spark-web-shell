import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SparkWebShellSharedModule } from '../../shared';
import { NgTerminalModule } from 'ng-terminal';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { ReactiveFormsModule } from '@angular/forms';

import {CdkTableModule} from '@angular/cdk/table';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  } from '@angular/material';

import {
    TerminalService,
    TerminalPopupService,
    TerminalComponent,
    TerminalDetailComponent,
    TerminalDialogComponent,
    TerminalPopupComponent,
    TerminalDeletePopupComponent,
    TerminalDeleteDialogComponent,
    terminalRoute,
    terminalPopupRoute
} from './';

const ENTITY_STATES = [
    ...terminalRoute,
    ...terminalPopupRoute,
];

@NgModule({
    exports: [
      CdkTableModule,
      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
    ]
  })
  export class MaterialModule {}

@NgModule({
    imports: [
        SparkWebShellSharedModule,
        RouterModule.forChild(ENTITY_STATES),
        NgTerminalModule,
        AutoCompleteModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        TerminalComponent,
        TerminalDetailComponent,
        TerminalDialogComponent,
        TerminalDeleteDialogComponent,
        TerminalPopupComponent,
        TerminalDeletePopupComponent,
    ],
    entryComponents: [
        TerminalComponent,
        TerminalDialogComponent,
        TerminalPopupComponent,
        TerminalDeleteDialogComponent,
        TerminalDeletePopupComponent,
    ],
    providers: [
        TerminalService,
        TerminalPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SparkWebShellTerminalModule {}
