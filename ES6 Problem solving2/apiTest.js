fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    const names = data.map(user => user.name)
    console.log(names);
    // console.log(data);
    // console.log(data.name);
    // console.log(data.email);
    // console.log(data.username);
    // console.log(data.address.street);
  });