import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/classes/users/user';

@Pipe({
  name: 'userLookup',
  pure: false
})
export class UserLookupPipe implements PipeTransform {

  transform(users: User[], text?: string): User[] {
    const term = text?.toLowerCase() ? text : ''.toLowerCase();
    return users.filter((data) =>
      data.name.toLowerCase().includes(term) ||
      data.username.toLowerCase().includes(term) ||
      data.role.toLowerCase().includes(term)
    );
  }
}
