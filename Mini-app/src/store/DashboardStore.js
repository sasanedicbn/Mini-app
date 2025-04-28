import { formatedStats } from "@/data/dashboard/dashboardData";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    overview: {
      totalRevenue: 24780,
      revenueChange: 12.5,
      newProjects: 18,
      projectsChange: 8.2,
      activeUsers: 1243,
      usersChange: 3.4,
      tasksCompleted: 327,
      tasksChange: 24.1,
    },

    recentActivities: [
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
    ],

    recentProjects: [
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
    ],

    quickActions: [
      { id: 1, name: "New Project", icon: "add" },
      { id: 2, name: "Create Task", icon: "task" },
      { id: 3, name: "Send Message", icon: "message" },
      { id: 4, name: "Generate Report", icon: "report" },
      { id: 5, name: "Schedule Event", icon: "event" },
      { id: 6, name: "Add User", icon: "person_add" },
    ],

    navigation: [
      { id: 1, name: "Dashboard", icon: "dashboard", active: true },
      { id: 2, name: "Projects", icon: "folder" },
      { id: 3, name: "Tasks", icon: "checklist" },
      { id: 4, name: "Calendar", icon: "calendar" },
      { id: 5, name: "Messages", icon: "message" },
      { id: 6, name: "Reports", icon: "analytics" },
      { id: 7, name: "Settings", icon: "settings" },
      { id: 8, name: "Help Center", icon: "help" },
    ],
  }),

  getters: {
    getFormattedStats: formatedStats
    },
    // Getter for overview stats
    getOverviewStats: (state) => state.overview,

    // Getter for recent activities (limited to 5)
    getRecentActivities: (state) => state.recentActivities.slice(0, 5),

    // Getter for recent projects (limited to 5)
    getRecentProjects: (state) => state.recentProjects.slice(0, 5),

    // Getter for quick actions
    getQuickActions: (state) => state.quickActions,

    // Getter for navigation items
    getNavigation: (state) => state.navigation,
  },

  actions: {
    // You can add actions here for updating state as needed
    addNewProject(project) {
      this.recentProjects.unshift(project);
    },

    addActivity(activity) {
      this.recentActivities.unshift(activity);
    },
  },
});
