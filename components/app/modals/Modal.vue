<template lang="pug">
.modal
  .modal-header: slot(name="header")
  .modal-description: slot(name="description")
  slot
</template>

<script lang="ts">
export default {
  name: 'Modal'
}
</script>

<style scoped>
.modal {
  background: #fff;
  border-radius: 54px;
  padding: 35px 95px 45px 45px;
  max-width: 606px;
}

.sex-modal {
  padding-left: 153px;
  padding-right: 153px;
  max-width: 100%;
}

.tests-modal {
  padding-left: 167px;
  padding-right: 167px;
  max-width: 100%;
}

.age-alert-modal {
  padding-left: 45px;
  padding-right: 45px;
}

.modal-header {
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #0c0058;
  margin-bottom: 10px;
}

.modal-description {
  line-height: 165%;
  color: #4e4a64;
  padding-bottom: 20px;
}

.modal-description:empty {
  display: none;
}

.modal :deep(.carousel__button.is-close) {
  top: 36px;
  right: 30px;
}

.modal :deep(.carousel__button.is-close svg) {
  stroke: #fe6205;
}

.modal :deep(:focus:not(.carousel__button.is-close)) {
  outline: none;
  box-shadow: none;
  -webkit-box-shadow: none;
}

@media screen and (max-width: 550px) {
  .modal {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  .age-alert-modal {
    padding-left: 20px;
    padding-right: 20px;
  }

  .tests-modal {
    padding-left: 20px;
    padding-right: 20px;
  }

  .sex-modal {
    width: 100%;
  }

  .modal-header :deep(.text-center) {
    text-align: left;
  }
}
</style>