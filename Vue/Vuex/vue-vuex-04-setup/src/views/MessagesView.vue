<script>
import MessageItem from '@/components/MessageItem.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    MessageItem
  },
  data() {
    return {
      idChannel: null,
      title: 'Chat ',
      people: [
        { id: 1, name: 'Tú', avatar: '/avatars/Me.jpg' },
        { id: 2, name: 'Jason', avatar: '/avatars/Person2.jpg' },
        { id: 3, name: 'Janet', avatar: '/avatars/Person1.jpg' }
      ],
    }
  },
  computed: {
    ...mapGetters('messages',['getMessages']),
    ...mapGetters('contacts',['getContactId']),
    messagesView() {
      return this.getMessages(this.idChannel)?.map((message) => {
        const author = this.getContactId(message.author)
        if (!author) return message;
        return {
          ...message,
          author,
          self: author.id === 1
        }
      })
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(id) {
        this.idChannel = id
        this.scrollToBottom()
      }
    }
  },
  mounted() {
    this.scrollToBottom()
  },
  methods: {
    scrollToBottom() {
      this.$refs?.end?.scrollIntoView({
          behavior: 'smooth'
      })
    },
  ...mapMutations('channels', ['updateChatTitle']),
  changeNameChat(newTitle) {
    this.updateChatTitle({ channelId: this.idChannel, newTitle }); // Pasar un objeto con channelId y newTitle
  }
  },
}
</script>

<template>
  <div class="messages">
    <header>
      <h2>{{ title }}</h2>
      <div class="people-list">
        <div
          class="people-item"
          v-for="p in people"
          :key="p.id"
        >
          <img :src="p.avatar" :alt="p.name" />
        </div>
      </div>
    </header>
    <div class="content">
      <MessageItem
        v-for="message in messagesView"
        :key="message.id"
        :avatar="message.author.avatar"
        :author="message.author.name"
        :message="message.text"
        :time="message.timestamp"
        :is-self="message.self"
      />
      <span ref="end"></span>
    </div>
    <footer>
      <textarea rows="3"></textarea>
      <button>
        <Icon icon="carbon:send-alt" />
      </button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.messages {
  @apply flex flex-col h-full;
  header {
    @apply flex justify-between items-center px-6 py-2;
    h2 {
      @apply font-bold text-2xl;
    }
    .people-list {
      @apply flex gap-1;
      .people-item {
        @apply flex justify-center items-center border-4 border-neutral-700 rounded-full;
        img {
          @apply w-8 rounded-full;
        }
      }
    }
  }
  .content {
    @apply flex flex-col gap-4 p-4 h-full overflow-y-auto;
  }
  footer {
    @apply flex p-2;
    textarea {
      @apply w-full px-2 py-2 resize-none bg-zinc-800 rounded-tl-md rounded-bl-md focus:outline-none;
    }
    button {
      @apply flex justify-center items-center px-4 bg-zinc-800 hover:bg-zinc-700 rounded-tr-md rounded-br-md text-2xl;
    }
  }
}
</style>