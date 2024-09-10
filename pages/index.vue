<template>
  <div class="container flex justify-center items-center mx-auto">
    <dialog-window />
    <div class="border rounded-md w-full h-dvh">
      <div class="flex">
        <userList @userSelected="navigateToUser" />
        <chat v-if="userInfo.id" :username="userInfo.name" :id="userInfo.id" />
        <div v-else class="w-full h-dvh border-2 rounded-md p-2 text-center">
          <span class="text-2xl font-semibold">Выберите пользователя из друзей</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import chat from '@/components/chat/index.vue';
import dialogWindow from '@/components/user/index.vue';
import userList from '@/components/userlist/index.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { dialogWindow, chat, userList },
  data() {
    return {
      loading: true,
      userInfo: { id: undefined, name: undefined }
    };
  },
  methods: {
    navigateToUser({ userId, userName }) {
      this.userInfo.id = Number(userId);
      this.userInfo.name = userName;
    }
  }
});
</script>
