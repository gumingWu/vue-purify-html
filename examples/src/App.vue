<script setup lang="ts">
const html = '<div>哈哈哈</div>'
const xssHtml = '<span style="color: red">Hello!</span><img src=a onerror="alert(1)">'
const xssHtml3 = '<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>'
</script>

<template>
  <div v-purify-html="html">hi</div>
  <div v-purify-html="xssHtml">hi</div>
  <div v-purify-html="xssHtml3"></div>
</template>
