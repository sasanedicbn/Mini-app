export const initialOverview = {
  totalRevenue: 24780,
  revenueChange: 12.5,
  newProjects: 18,
  projectsChange: 8.2,
  activeUsers: 1243,
  usersChange: 3.4,
  tasksCompleted: 327,
  tasksChange: 24.1,
};

export const initialRecentActivities = [
  {
    id: 1,
    type: "project",
    action: "created",
    details: "Website Redesign",
    time: "10 minutes ago",
  },
  {
    id: 2,
    type: "task",
    action: "completed",
    details: "Homepage Layout",
    person: "Sarah Johnson",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "message",
    action: "received",
    details: "New message from client",
    time: "2 hours ago",
  },
  {
    id: 4,
    type: "payment",
    action: "received",
    details: "Payment for invoice #1254",
    time: "5 hours ago",
  },
  {
    id: 5,
    type: "team",
    action: "added",
    details: "New team member",
    time: "1 day ago",
  },
];

export const initialRecentProjects = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Acme Inc.",
    status: "Active",
    dueDate: "Jun 15, 2023",
    progress: 75,
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "Tech Solutions",
    status: "On Hold",
    dueDate: "Jul 1, 2023",
    progress: 30,
  },
  {
    id: 3,
    name: "Marketing Campaign",
    client: "Global Brands",
    status: "Completed",
    dueDate: "May 20, 2023",
    progress: 100,
  },
  {
    id: 4,
    name: "E-commerce Platform",
    client: "ShopEasy",
    status: "Active",
    dueDate: "Aug 10, 2023",
    progress: 45,
  },
  {
    id: 5,
    name: "CRM System",
    client: "Business Tools",
    status: "Active",
    dueDate: "Jul 25, 2023",
    progress: 60,
  },
];

export const initialQuickActions = [
  { id: 1, name: "New Project", icon: "add" },
  { id: 2, name: "Create Task", icon: "task" },
  { id: 3, name: "Send Message", icon: "message" },
  { id: 4, name: "Generate Report", icon: "report" },
  { id: 5, name: "Schedule Event", icon: "event" },
  { id: 6, name: "Add User", icon: "person_add" },
];

export const initialNavigation = [
  { id: 1, name: "Dashboard", icon: "dashboard", active: true },
  { id: 2, name: "Projects", icon: "folder" },
  { id: 3, name: "Tasks", icon: "checklist" },
  { id: 4, name: "Calendar", icon: "calendar" },
  { id: 5, name: "Messages", icon: "message" },
  { id: 6, name: "Reports", icon: "analytics" },
  { id: 7, name: "Settings", icon: "settings" },
  { id: 8, name: "Help Center", icon: "help" },
];

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
export const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: "fas fa-home" },
  { name: "Projects", path: "/dashboard/projects", icon: "fas fa-folder" },
  { name: "Tasks", path: "/dashboard/tasks", icon: "fas fa-tasks" },
  { name: "Calendar", path: "/dashboard/calendar", icon: "fas fa-calendar" },
  { name: "Messages", path: "/dashboard/messages", icon: "fas fa-envelope" },
  { name: "Reports", path: "/dashboard/reports", icon: "fas fa-chart-bar" },
  { name: "Settings", path: "/dashboard/settings", icon: "fas fa-cog" },
];

export const columns = [
  { key: "name", label: "Project Name", sortable: true },
  { key: "client", label: "Client", sortable: true },
  { key: "status", label: "Status", sortable: true },
  { key: "dueDate", label: "Due Date", sortable: true },
  { key: "progress", label: "Progress", sortable: true },
];

export const data = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Acme Inc.",
    status: "Active",
    dueDate: "Jun 15, 2023",
    progress: 75,
    color: "#4299e1",
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "Tech Solutions",
    status: "On Hold",
    dueDate: "Jul 1, 2023",
    progress: 30,
    color: "#9f7aea",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    client: "Global Brands",
    status: "Completed",
    dueDate: "May 20, 2023",
    progress: 100,
    color: "#f56565",
  },
  {
    id: 4,
    name: "E-commerce Platform",
    client: "ShopEasy",
    status: "Active",
    dueDate: "Aug 10, 2023",
    progress: 45,
    color: "#48bb78",
  },
  {
    id: 5,
    name: "CRM System",
    client: "Business Tools",
    status: "Active",
    dueDate: "Jul 25, 2023",
    progress: 60,
    color: "#ed8936",
  },
];

export const clients = [
  { value: "Tech Solutions", label: "Tech Solutions" },
  { value: "ShopEasy", label: "ShopEasy" },
  { value: "Business Tools", label: "Business Tools" },
];

export const statuses = [
  { value: "not-started", label: "Not Started" },
  { value: "in-progress", label: "Active" },
  { value: "on-hold", label: "On Hold" },
  { value: "completed", label: "Completed" },
];

export const validationRules = {
  name: {
    message: "Project name is required",
    validate: (val) => val.trim() !== "",
  },
  client: {
    message: "Client is required",
    validate: (val) => val.trim() !== "",
  },
  status: {
    message: "Status is required",
    validate: (val) => val.trim() !== "",
  },
  dueDate: {
    message: "Date is required",
    validate: (val) => val.trim() !== "",
  },
};
