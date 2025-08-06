<script setup>
defineProps({
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
})
</script>

<template>
  <div class='relative border bg-white border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2'>
    <img @click='onClickFavorite' :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="like" class='absolute top-8 left-8' />
    <img :src="imageUrl" alt="sneakers">
    <p mt-2>{{ title }}</p>

    <div class='flex justify-between mt-5'>
      <div class='flex flex-col'>
        <span class='text-slate-400'>Цена:</span>
        <b>{{ price }} р.</b>
      </div>
      <img @click='onClickAdd' :src="!isAdded ? '/plus.svg' : './checked.svg'" alt="plus" />
    </div>
  </div>
</template>

<style scoped></style>
