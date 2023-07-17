<template>
  <v-container>
    <v-responsive>
      <v-list density="compact" select-strategy="independent">
        <v-list-subheader>General</v-list-subheader>
        <v-list-item
          v-for="(setting, index) in settingsGeneral"
          :key="index"
          variant="elevated"
          elevation="0"
          density="compact"
          :value="setting.value"
        >
          <v-list-item-title>{{ setting.title }}</v-list-item-title>
          <template v-slot:append="{ isActive }">
            <v-list-item-action end>
              <v-switch
                :model-value="isActive"
                density="compact"
                color="primary"
                inset
                hide-details
              ></v-switch>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
      <v-list density="compact" select-strategy="independent">
        <v-list-subheader>Notifications</v-list-subheader>
        <v-list-item
          v-for="(setting, index) in settingsNotifications"
          :key="index"
          variant="elevated"
          elevation="0"
          density="compact"
          :value="setting.value"
        >
          <v-list-item-title>{{ setting.title }}</v-list-item-title>
          <template v-slot:append="{ isActive }">
            <v-list-item-action end>
              <v-switch
                :model-value="isActive"
                density="compact"
                color="primary"
                inset
                hide-details
              ></v-switch>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
    </v-responsive>
    <v-app-bar flat color="transparent" location="bottom">
      <v-row class="px-3">
        <v-col cols="6">
          <v-btn block variant="flat" color="error" @click="discard"
            >discard</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn block variant="outlined" color="primary" @click="discard"
            >save</v-btn
          >
        </v-col>
      </v-row>
    </v-app-bar>
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { useSettingsStore } from "@/store/settings";
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const settingsStore = useSettingsStore();

const settingsGeneral = computed(() => {
  return settingsStore.generalSettings;
});

const settingsNotifications = computed(() => {
  return settingsStore.notificationSettings;
});

const store = useAppStore();

onMounted(() => {
  store.setTitle("Settings");
  store.hideNavBar(true);
});

const router = useRouter();

const discard = () => {
  router.back();
};
</script>
