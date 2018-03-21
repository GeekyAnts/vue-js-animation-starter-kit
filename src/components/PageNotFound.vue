<template>
  <div class="page-not-found-wrapper">
    <p> <icon name="book" spin></icon> {{msg}} </p>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data () {
    return {
      msg: 'Page Not Found'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/pageNotFound.scss'
</style>
