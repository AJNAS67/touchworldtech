import { Routes } from '@angular/router';
import { AddemployeeComponent } from './componets/addemployee/addemployee.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },

    {
        path: 'employee',
        loadComponent: () => import('./pages/employee/employee.component').then(c => c.EmployeeComponent),
        // children: [
        //     {
        //         path: 'addemployee', component: AddemployeeComponent
        //     }
        // ]
    },
    { path: 'addemployee', component: AddemployeeComponent },
    // { path: "employee", component: EmployeeComponent }
];
