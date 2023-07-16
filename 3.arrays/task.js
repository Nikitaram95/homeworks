function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
  return arr2.every((element, index) => element === arr1 [index]);

}

function getUsersNamesInAgeRange(users, gender) {
  const usersGender = users.filter ((user) => user.gender === gender);
  const usersAge = usersGender.map((user) => user.age);
  const allAge = usersAge.reduce((acc, age) => acc + age, 0);
  if (usersAge.length === 0) {
    return 0;
  }
    return allAge / usersAge.length;
}