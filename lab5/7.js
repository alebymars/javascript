async function interviews(...applicants) {
  for (let i = 0; i < applicants.length; i++) {
    const [name, prepTime1, defenseTime1, prepTime2, defenseTime2] =
      applicants[i];

    console.log(`${name} started the 1 task.`);
    await new Promise((resolve) => setTimeout(resolve, prepTime1));
    console.log(`${name} moved on to the defense of the 1 task.`);
    await new Promise((resolve) => setTimeout(resolve, defenseTime1));
    console.log(`${name} completed the 1 task.`);

    if (i < applicants.length - 1) {
      console.log(`${name} is resting.`);
      console.log("\n");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } else {
      console.log(`${name} finished the interview process.`);
    }
  }

  for (let i = 0; i < applicants.length; i++) {
    const [name, prepTime1, defenseTime1, prepTime2, defenseTime2] =
      applicants[i];

    console.log(`${name} started the 2 task.`);
    await new Promise((resolve) => setTimeout(resolve, prepTime2));
    console.log(`${name} moved on to the defense of the 2 task.`);
    await new Promise((resolve) => setTimeout(resolve, defenseTime2));
    console.log(`${name} completed the 2 task.`);

    if (i < applicants.length - 1) {
      console.log(`${name} is resting.`);
      console.log("\n");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } else {
      console.log(`${name} finished the interview process.`);
    }
  }
}

interviews(
  ["Ivan", 5000, 2000, 7000, 2000],
  ["John", 3000, 4000, 5000, 1000],
  ["Sophia", 4000, 2000, 5000, 1000]
);
