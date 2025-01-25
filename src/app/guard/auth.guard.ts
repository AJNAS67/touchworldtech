import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let login = true;
  if (login) {
    return true
  }
  else {
    router.navigate(['/login']);
    return false
  }
};
