
const employeeId = document.getElementById("employee-number");
const clockIn = document.getElementById("clock-in");

clockIn.addEventListener('click', () => {
  for (let i = 0; i < employeeId.length; i++ ) {
    let clockIn = employeeId[i];
  }
});


const viewAll = document.getElementById("view-all");

let html = '';

viewAll.addEventListener('click', () => {

  for ( let i = 0; i < staff.employees.length; i++ ) {
    let employee = staff[i];
    html += `
      <h2>${employee.id}</h2>
      <h3>${employee.firstName} | ${employee.lastName}</h3>
      <img src="${employee.photo}" alt="${employee.position}">
      `;
};

document.querySelector('main').main.insertAdjacentHTML('beforeend', html);
});
