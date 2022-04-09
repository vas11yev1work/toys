<template lang="pug">
a.btn(
  :href="href"
  :class="{ 'btn-outline': outlined, 'btn-disabled': disabled, 'btn-arrow': arrow, loading, icon, rounded }"
  @click="handleClick"
)
  span(:class="{ icon }")
    slot
  Preloader
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Preloader from '@/components/icons/Preloader.vue';

export default defineComponent({
  name: 'Button',
  components: {Preloader},
  props: {
    outlined: {type: Boolean, default: false},
    arrow: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    href: {type: String, default: 'javascript:'},
    click: {type: [Function, Boolean], default: false},
    icon: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
  },
  data: () => ({
    loading: false
  }),
  methods: {
    async handleClick(e: Event) {
      if (!this.click || this.disabled || this.loading) return;
      e.preventDefault();
      this.loading = true;
      if (typeof this.click === 'function') await this.click();
      this.loading = false;
    }
  }
});
</script>

<style scoped>
.btn {
  background: linear-gradient(180deg, #ff9649 0%, #ff5c00 100%);
  box-shadow: 0 0 22px rgba(255, 107, 0, 0.4);
  border-radius: 15px;
  font-size: 16px;
  line-height: 20px;
  padding: 25px 55px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  white-space: nowrap;
  position: relative;
  align-items: center;
  z-index: 2;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.btn:hover {
  background: linear-gradient(165.02deg, #f42c0e -25.76%, #ff7b1c 117.69%);
  color: #fff;
}

.btn.btn-arrow:after {
  content: '›';
  display: inline-flex;
  margin-left: 15px;
}

.btn.loading.btn-arrow:after {
  opacity: 0;
}

.btn.btn-disabled:not(.icon) {
  background: #ececf0;
  box-shadow: none;
  color: #7a7a7a;
  cursor: default;
}

.btn-outline {
  padding: 17px 48px;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
  background: transparent;
  box-shadow: none;
  border: 1px solid #fe6205;
  color: #0c0058;
  font-weight: 600;
}

.btn svg.preloader {
  display: none;
  transition: opacity 1s;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -16px;
  margin-left: -15px;
}

.btn :deep(svg.preloader path), .btn :deep(svg.preloader rect) {
  fill: #fff;
}

.btn.loading span {
  opacity: 0;
  visibility: hidden;
}

.btn.loading svg {
  display: block;
  opacity: 1;
}
span.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  height: 56px;
  width: 56px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.icon.rounded {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
</style>