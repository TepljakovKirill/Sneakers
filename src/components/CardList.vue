<script setup>
import Card from './Card.vue';

const onClickAdd = () => {

}

</script>

<template>
  <div class='grid grid-cols-4 gap-5'>
    <Card
      :price='5000'
      title='Мужские кроссовки Nike'
      imageUrl='/sneakers/sneakers-1.jpg'
      :isAdded='false'
      :isFavorite='true'
      :onClickAdd='onClickAdd'
    />
  </div>

</template>

<style scoped></style>
