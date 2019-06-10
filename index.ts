import * as fromStore from './src/store';

const initialState = fromStore.reducer();

console.log('STATES');
console.log(initialState);

console.log('\n\n');
const afterSettingUser = fromStore.reducer(
  initialState,
  new fromStore.UserSetUser({ id: 10, likeCount: 100, name: 'ben' }),
);
console.log('STATES');
console.log(initialState);
console.log(afterSettingUser);

console.log('\n\n');
const afterChangingName = fromStore.reducer(afterSettingUser, new fromStore.UserUpdateName('ben with a new name'));
console.log('STATES');
console.log(initialState);
console.log(afterSettingUser);
console.log(afterChangingName);

console.log('\n\n');
const afterAddingALike = fromStore.reducer(afterChangingName, new fromStore.UserIncrementLikes());
console.log('STATES');
console.log(initialState);
console.log(afterSettingUser);
console.log(afterChangingName);
console.log(afterAddingALike);

console.log('\n\n');
const afterResettingLikes = fromStore.reducer(afterAddingALike, new fromStore.UserResetLikes());
console.log('STATES');
console.log('\n', 'States');
console.log(initialState);
console.log(afterSettingUser);
console.log(afterChangingName);
console.log(afterAddingALike);
console.log(afterResettingLikes);
