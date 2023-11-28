// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push({ id: 5, task: "Walk the dog"});

for (let i = 0; i < userTaskList.length; i++) {
  if (userTaskList[i].id === 4) {
    userTaskList[i].task = "Go to the gym";
  };
};

userTaskList.pop();

for (let i = 0; i < userTaskList.length; i++) {
  if (userTaskList[i].id === 4) {
    console.log(`Task id: ${userTaskList[i].id}, ${userTaskList[i].task}`);
  };
};