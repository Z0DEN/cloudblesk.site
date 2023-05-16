// Определяем объект employees
const employees = {
  "John Doe": 50000,
  "Jane Smith": 60000,
  "Bob Johnson": 75000,
  "Alice Lee": 80000,
  totalSalary: function() {
    let total = 0;
    for (let employee in this) {
      if (typeof this[employee] === "number") {
        total += this[employee];
      }
    }
    return total;
  },
  averageSalary: function() {
    let count = 0;
    let total = 0;
    for (let employee in this) {
      if (typeof this[employee] === "number") {
        count++;
        total += this[employee];
      }
    }
    return total / count;
  },
  highestSalary: function() {
    let highest = 0;
    for (let employee in this) {
      if (typeof this[employee] === "number" && this[employee] > highest){
        highest = this[employee];
      }
    }
    return highest;
  },
  lowestSalary: function() {
    let lowest = Infinity;
    for (let employee in this) {
      if (typeof this[employee] === "number" && this[employee] < lowest){
        lowest = this[employee];
      }
    }
    return lowest;
  }
};

const employeesCopy = { ...employees };

// Получаем ссылки на элементы страницы
const calculateBtn = document.getElementById("calculate");
const totalSalary = document.getElementById("total-salary");
const averageSalary = document.getElementById("average-salary");
const highestSalary = document.getElementById("highest-salary");
const lowestSalary = document.getElementById("lowest-salary");

// Добавляем обработчик события на кнопку "Calculate"
calculateBtn.addEventListener("click", function() {

  employeesCopy["John Doe"] = Number(document.getElementById("john-doe").value);
  employeesCopy["Jane Smith"] = Number(document.getElementById("jane-smith").value);
  employeesCopy["Bob Johnson"] = Number(document.getElementById("bob-johnson").value);
  employeesCopy["Alice Lee"] = Number(document.getElementById("alice-lee").value);

  // Вычисляем результаты
  const total = employeesCopy.totalSalary();
  const average = employeesCopy.averageSalary();
  const highest = employeesCopy.highestSalary();
  const lowest = employeesCopy.lowestSalary();

  // Отображаем результаты на странице
  totalSalary.textContent = `$${total}`;
  averageSalary.textContent = `$${average}`;
  highestSalary.textContent = `$${highest}`;
  lowestSalary.textContent = `$${lowest}`;
});