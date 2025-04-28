export const formatStats = (overview) => {
  return [
    {
      title: "Total Revenue",
      value: `$${overview.totalRevenue.toLocaleString()}`,
      change: overview.revenueChange,
      icon: "fas fa-dollar-sign",
      bgColor: "#ebf8ff",
    },
    {
      title: "New Projects",
      value: overview.newProjects.toString(),
      change: overview.projectsChange,
      icon: "fas fa-folder-plus",
      bgColor: "#fff5f5",
    },
    {
      title: "Active Users",
      value: overview.activeUsers.toLocaleString(),
      change: overview.usersChange,
      icon: "fas fa-users",
      bgColor: "#f0fff4",
    },
    {
      title: "Tasks Completed",
      value: overview.tasksCompleted.toString(),
      change: overview.tasksChange,
      icon: "fas fa-check-circle",
      bgColor: "#faf5ff",
    },
  ];
};

export const formatActivities = (activities) => {
  return activities.map((activity) => {
    let text = "";
    let icon = "";
    let bgColor = "";

    switch (activity.type) {
      case "project":
        text = `New project "${activity.details}" created`;
        icon = "fas fa-folder-plus";
        bgColor = "#ebf8ff";
        break;
      case "task":
        text = `${activity.person} completed task "${activity.details}"`;
        icon = "fas fa-check-circle";
        bgColor = "#f0fff4";
        break;
      case "message":
        text = `New message from ${activity.details}`;
        icon = "fas fa-envelope";
        bgColor = "#fff5f5";
        break;
      case "payment":
        text = `Payment received for ${activity.details}`;
        icon = "fas fa-dollar-sign";
        bgColor = "#faf5ff";
        break;
      case "team":
        text = `New team member ${activity.details}`;
        icon = "fas fa-user-plus";
        bgColor = "#ebf8ff";
        break;
      default:
        text = activity.details;
        icon = "fas fa-info-circle";
        bgColor = "#edf2f7";
    }

    return {
      id: activity.id,
      text,
      time: activity.time,
      icon,
      bgColor,
    };
  });
};
