import { Routes } from '@angular/router';
import { AddemployeeComponent } from './componets/addemployee/addemployee.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'employee/employeeList', pathMatch: 'full',
    },
    { path: 'login', component: LoginComponent },

    {
        path: 'employee',
        component: EmployeeComponent,
        canActivate: [authGuard],

        children: [
            {
                path: 'api-data-table',
                loadComponent: () => import('./pages/api-data-table/api-data-table.component').then(c => c.ApiDataTableComponent),
                canActivate: [authGuard],

            },
            {
                path: 'employeeList',
                loadComponent: () => import('./componets/employeetable/employeetable.component').then(c => c.EmployeetableComponent),
                canActivate: [authGuard],
            },
            {
                path: 'addemployee',
                loadComponent: () => import('./componets/addemployee/addemployee.component').then(c => c.AddemployeeComponent),
                canActivate: [authGuard],
            },


        ]
    },

    { path: 'addemployee', component: AddemployeeComponent },
    // { path: "employee", component: EmployeeComponent }
];
