/* Да се напише задача за портокали която определя колко портокали биха изгнили
 след определен брой дни и да се изринти общият брой здрави портокали */
 // K = брой редове
 // L = стълба
 // R = брой дни
 
 function orangesTask(K, L, R) {
    // Създаваме матрица която представлява портокалите
    let oranges = Array.from({length: K}, () => Array(L).fill(1));
    // Създаваме променлива която събира общ брой портокали
    let healthyOranges = K * L;
    // Влизаме в лууп и итерираме за дадения от входа брой дни
    for (let i = 0; i < R; i++) {
      for (let row = 0; row < K; row++) {
        for (let col = 0; col < L; col++) {
          // Проверяваме дали портокала е развален
          if (oranges[row][col] === 0) {
            // Проверяваме за неразвалени портокали
            if (row > 0 && oranges[row - 1][col] === 1) {
              oranges[row - 1][col] = 0;
              healthyOranges--;
            }
            if (col > 0 && oranges[row][col - 1] === 1) {
              oranges[row][col - 1] = 0;
              healthyOranges--;
            }
            if (row < K - 1 && oranges[row + 1][col] === 1) {
              oranges[row + 1][col] = 0;
              healthyOranges--;
            }
            if (col < L - 1 && oranges[row][col + 1] === 1) {
              oranges[row][col + 1] = 0;
              healthyOranges--;
            }
          }
        }
      }
    }
    console.log(healthyOranges);
  }
  
  orangesTask(8, 10, 2);