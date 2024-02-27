import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../decorators/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
    ]);

    console.log('>>> inside role guard require', requireRoles);

    if (!requireRoles) return true;

    const request = context.switchToHttp().getRequest();
    const userRole = request.user.role;

    if (!userRole) return false;

    console.log('>>> inside role guard user role', userRole);

    return requireRoles.some((role) => userRole === role);
  }
}
