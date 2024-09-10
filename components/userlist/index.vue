<template>
    <div class="w-1/4 h-full">
        <div v-if="!loading" class="h-full">
            <div class="bg-neutral-200 rounded-lg m-2">
                <div class="p-2 text-center">
                    <img :src="`https://tools-api.webcrumbs.org/image-placeholder/32/32/user/${activeUser.id}`"
                        alt="" />
                    <p class=" font-light text-sm">Текущий пользователь</p>
                    <p class=" font-medium text-xl">{{ activeUser.username }}</p>
                </div>
            </div>
            <h3 class="font-title text-lg mb-4 w-full border-b ">
                <p class="ml-2">Друзья</p>
            </h3>
            <ul class="space-y-2">
                <li class="flex items-center space-x-4 mx-3 hover:bg-neutral-300 hover:p-1 hover:rounded-md cursor-pointer "
                    v-for="item in userList" :key="item.id" @click="selectUser(item.id, item.username)">
                    <img class="w-8 h-8 rounded-full object-cover"
                        :src="`https://tools-api.webcrumbs.org/image-placeholder/32/32/user/${item.id}`"
                        :alt="`user${item.id}`" />
                    <span class="p-2">{{ item.username }}</span>
                </li>
            </ul>
        </div>
        <div v-else class="flex items-center justify-center h-dvh">
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
                role="status"></div>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
        }
    },
    computed: {
        userList() {
            return this.$store.getters.getUserList;
        },
        activeUser() {
            return this.$store.getters.getActiveUser;
        },
    },
    methods: {
        selectUser(userId, username) {
            this.$emit('userSelected', { userId, userName: username });
        }
    },
    watch: {
        activeUser(newValue) {
            if (newValue && newValue.id) { this.loading = false; }
        },
        userList(newUserList) {
            if (newUserList.length && this.activeUser && this.activeUser.id) { this.loading = false; }
        }
    },
    mounted() {
        if (this.activeUser && this.activeUser.id) {
            this.loading = false;
        }
    }

};
</script>