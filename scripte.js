const Notifications = document.querySelector(".not"),
  buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success: Success Notification.",
  },
  error: {
    icon: "fa-circle-check",
    text: "Error: Error Notification.",
  },
  warning: {
    icon: "fa-circle-warning",
    text: "Warning: Warning Notification.",
  },
  info: {
    icon: "fa-circle-info",
    text: "info: info Notification.",
  },
};

const createToast = (id) => {
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="column">
                  <i class="fa-solid ${icon}"></i>
                  <span>${text}</span>
                  </div>
                  <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  Notifications.appendChild(toast);
  toast.timeId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if(toast.timeId) clearTimeout(toast.timeId)
  setTimeout(() => toast.remove(), 500);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
