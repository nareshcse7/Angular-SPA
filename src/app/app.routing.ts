import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { BehindDesignComponent } from './behind-design/index';
import { WhatWeDoComponent } from './what-we-do/index';
import { ProjectStreamComponent } from './project-stream/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    /* { path: '', component: HomeComponent, canActivate: [AuthGuard] }, */
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'behindTheDesign', component: BehindDesignComponent },
    { path: 'whatWeDo', component: WhatWeDoComponent },
    { path: 'projectStream', component: ProjectStreamComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);