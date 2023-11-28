// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json());
  };
  
  getUser()
    .then((userData) => {
      const newUsers = userData.map(((userData) => userData.name));  
      console.log(newUsers);
    });