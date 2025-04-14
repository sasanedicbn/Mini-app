import { User, Building } from "lucide-vue-next";
import { ref } from "vue";

export const authSideBarData = ref([
  {
    icon: User,
    title: "Your personal details",
    description: "Personal details of user",
    active: true,
  },
  {
    icon: Building,
    title: "Your company details",
    description: "Company basic information",
    active: false,
  },
]);
