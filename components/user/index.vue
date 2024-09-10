<template>
    <div v-if="isDialogVisible" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" @click.self="closeDialog">
        <div class="bg-white p-5 rounded-lg max-w-lg mx-4 w-full">
            <h2 class="text-xl font-bold mb-4">Выберите пользователя</h2>
            <ul class="list-none p-0 m-0">
                <li v-for="user in users" :key="user.id" 
                    @click="selectUser(user.id, user.username)"
                    class="py-2 px-3 cursor-pointer hover:bg-gray-100">
                    <span>{{ user.username }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDialogVisible: true,
            users: []
        };
    },
    computed: {
        userList() {
            this.users = this.$store.getters.getUserList;
        },
    },
    methods: {
        selectUser(id, username) {
            this.$store.dispatch('setUser', { id: id, username: username });
            this.closeDialog();
        },
        closeDialog() {
            this.isDialogVisible = false;
        }
    },
    mounted() {
        this.users = this.$store.getters.getUserList;
    }
};
</script>
