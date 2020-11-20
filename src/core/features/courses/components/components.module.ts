// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreComponentsModule } from '@components/components.module';
import { CoreDirectivesModule } from '@directives/directives.module';
import { CorePipesModule } from '@pipes/pipes.module';

import { CoreCoursesCourseListItemComponent } from './course-list-item/course-list-item';
import { CoreCoursesCourseProgressComponent } from './course-progress/course-progress';
import { CoreCoursesCourseOptionsMenuComponent } from './course-options-menu/course-options-menu';
import { CoreCoursesSelfEnrolPasswordComponent } from './self-enrol-password/self-enrol-password';

@NgModule({
    declarations: [
        CoreCoursesCourseListItemComponent,
        CoreCoursesCourseProgressComponent,
        CoreCoursesCourseOptionsMenuComponent,
        CoreCoursesSelfEnrolPasswordComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        TranslateModule.forChild(),
        CoreComponentsModule,
        CoreDirectivesModule,
        CorePipesModule,
    ],
    exports: [
        CoreCoursesCourseListItemComponent,
        CoreCoursesCourseProgressComponent,
        CoreCoursesCourseOptionsMenuComponent,
        CoreCoursesSelfEnrolPasswordComponent,
    ],
    entryComponents: [
        CoreCoursesCourseOptionsMenuComponent,
    ],
})
export class CoreCoursesComponentsModule {}
