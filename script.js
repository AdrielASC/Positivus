//Working Process

const processes = document.querySelectorAll(".working-process-content button");

function activateProcess(event) {
  const process = event.currentTarget;
  const controls = process.getAttribute("aria-controls");
  const process_info = document.getElementById(controls);

  process_info.classList.toggle("active");

  const active = process_info.classList.contains("active");
  process.setAttribute("aria-expanded", active);
}

function processesEvents(process) {
  process.addEventListener("click", activateProcess);
}

processes.forEach(processesEvents);
