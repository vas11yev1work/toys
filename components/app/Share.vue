<template lang="pug">
.share
  .title Поделись своим результатом:
  .soc-nets-list
    shareNetwork(
      v-for="network in networks"
      :key="network.network"
      :network="network.network"
      :url="location"
      :title="title"
      :media="image"
      :description="description"
    )
      Image(:slug="network.icon")
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Image from '@/components/basic/Image.vue';
import config from '@/config';

export default defineComponent({
  components: {Image},
  data: () => ({
    networks: [
      {network: 'vk', name: 'Vk', icon: 'vk.svg'},
      {network: 'facebook', name: 'Facebook', icon: 'fb.svg'},
      {network: 'telegram', name: 'Telegram', icon: 'telegram.svg'},
      {network: 'twitter', name: 'Twitter', icon: 'twitter.svg'},
      {network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'odnoklassniki.svg'},
    ]
  }),
  props: {
    title: {type: String, default: ''},
    image: {type: String, default: ''},
    description: {type: String, default: ''},
  },
  computed: {
    location() {
      return config.host;
    }
  }
});
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  color: #0c0058;
  margin-bottom: 25px;
}

.soc-nets-list {
  display: flex;
}

.soc-nets-list a {
  margin-right: 17px;
}

.soc-nets-list a img {
  width: 46px;
}
</style>