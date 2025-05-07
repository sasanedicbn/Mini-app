import { defineStore } from "pinia";
import {
  initialOverview,
  initialRecentActivities,
  initialRecentProjects,
  initialQuickActions,
  initialNavigation,
  formatStats,
  formatActivities,
} from "@/data/dashboard/dashboardData";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    overview: initialOverview,
    recentActivities: initialRecentActivities,
    recentProjects: initialRecentProjects,
    // ovo gore mi je za dashboard u njega trebam dodati projekat
    quickActions: initialQuickActions,
    navigation: initialNavigation,
  }),

  getters: {
    getFormattedStats: (state) => formatStats(state.overview),
    getFormattedActivities: (state) => formatActivities(state.recentActivities),
    getOverviewStats: (state) => state.overview,
    getRecentActivities: (state) => state.recentActivities.slice(0, 5),
    getRecentProjects: (state) => state.recentProjects.slice(0, 7),
    getQuickActions: (state) => state.quickActions,
    getNavigation: (state) => state.navigation,
  },

  actions: {
    addNewProject(project) {
      this.recentProjects.unshift(project);
    },

    addActivity(activity) {
      this.recentActivities.unshift(activity);
    },
  },
});
