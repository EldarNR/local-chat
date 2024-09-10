<template>
    <div class="w-full h-dvh flex border-l-2 justify-between flex-col py-4 px-4">
        <div class="overflow-auto">
            <div class="flex justify-between mx-4">
                <h3 class="font-title text-lg mb-4">Чат</h3>
                <h3>{{ username }}</h3>
            </div>
            <div class="p-4 bg-neutral-100 h-dvh rounded-md overflow-y-auto space-y-4">
                <div v-for="(msg, index) in messages" :key="index"
                    :class="msg.sender === activeUserId ? 'flex justify-end' : 'flex justify-start'">
                    <div
                        :class="msg.sender === activeUserId ? ' bg-neutral-200 border border-neutral-300 text-black p-3 rounded-md max-w-xs' : 'bg-neutral-50 border p-3 rounded-md max-w-xs'">
                        {{ msg.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="my-4 flex float mx-4">
            <input class="flex-grow border rounded-md mr-2 ps-2" type="text" v-model="newMessage"
                placeholder="Сообщение..." @keyup.enter="sendMessage" />
            <button class="bg-primary rounded-md text-black h-[36px] w-[36px] flex items-center justify-center"
                @click="sendMessage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>send-circle</title>
                    <path
                        d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M8,7.71V11.05L15.14,12L8,12.95V16.29L18,12L8,7.71Z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            newMessage: '',
            activeUserId: this.$store.getters.getActiveUser?.id || null,
            messages: []
        };
    },
    methods: {
        getChatKey() {
            return `chat_${Math.min(this.id, this.activeUserId)}_${Math.max(this.id, this.activeUserId)}`;
        },
        loadMessages() {
            const chatKey = this.getChatKey();
            const storedMessages = localStorage.getItem(chatKey);
            return storedMessages ? JSON.parse(storedMessages) : [];
        },
        saveMessages() {
            const chatKey = this.getChatKey();
            localStorage.setItem(chatKey, JSON.stringify(this.messages));
        },
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                const message = { sender: this.activeUserId, text: this.newMessage };
                this.messages.push(message);
                this.saveMessages();
                this.newMessage = '';
            }
        },
        updateMessages(event) {
            const chatKey = this.getChatKey();
            if (event.key === chatKey) {
                this.messages = JSON.parse(event.newValue);
            }
        }
    },
    mounted() {
        this.activeUserId = this.$store.getters.getActiveUser.id;
        this.messages = this.loadMessages();
        window.addEventListener('storage', this.updateMessages);
    },
    beforeDestroy() {
        window.removeEventListener('storage', this.updateMessages);
    },
    watch: {
        id() {
            this.activeUserId = this.$store.getters.getActiveUser.id;
            this.messages = this.loadMessages();
        }
    }
};
</script>
