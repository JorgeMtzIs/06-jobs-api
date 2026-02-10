import { enableInput, message, token } from "./index.js";
import { showJobs } from "./jobs.js";

export const showDelete = async (jobId) => {
  enableInput(false);

  try {
    const response = await fetch(`/api/v1/jobs/${jobId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();
    if (response.status === 200) {
      message.textContent = "Job entry successfully deleted";
    } else {
      message.textContent = "Failed to delete job entry";
    }
    showJobs();
  } catch (error) {
    console.log(error);
    message.textContent = "There was a communication error";
    showJobs();
  }
  enableInput(true);
};
