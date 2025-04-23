<script setup lang="ts">
import { useInstanceDefaults } from '#imports'

const value = await useInstanceDefaults({ id: 1 }, { text: 'default message' })
</script>

<template>
  <div>
    value: {{ JSON.stringify(value) }}
  </div>
</template>
