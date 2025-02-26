<template>
  <p style="color: black; font-size: 1.3rem">Rate the movie here with us ✨</p>
  <div class="rating-container">
    <span
      v-for="(star, index) in 10"
      :key="index"
      class="star"
      @click="setRating(index + 1)"
      @mousemove="previewRating(index + 1, $event)"
      @mouseleave="resetPreview"
    >
      <font-awesome-icon
        v-if="getStarType(index) === 'full'"
        icon="fa-solid fa-star"
        class="filled"
      />
      <font-awesome-icon
        v-else-if="getStarType(index) === 'half'"
        icon="fa-solid fa-star-half-stroke"
        class="filled"
      />
      <font-awesome-icon v-else icon="fa-regular fa-star" class="empty" />
    </span>
  </div>

  <!-- Display selected rating -->
  <p class="rating-value">
    Your Rating is: <span v-if="rating > 0" class="rating-value">{{ rating }}</span>
  </p>

  <!-- button for submit -->
  <n-button style="margin-top: 24px" type="primary"> Submit </n-button>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(0) // Stores final rating
const tempRating = ref(0) // Stores preview when hovering

const setRating = (value) => {
  rating.value = value - 0.5 // Adjust for half-star selection
}

const previewRating = (value, event) => {
  const isHalf = event.offsetX < event.target.clientWidth / 2
  tempRating.value = isHalf ? value - 0.5 : value
}

const resetPreview = () => {
  tempRating.value = 0
}

const getStarType = (index) => {
  const currentRating = tempRating.value || rating.value
  if (index + 1 <= currentRating) return 'full'
  if (index + 0.5 === currentRating) return 'half'
  return 'empty'
}
</script>

<style scoped>
.rating-container {
  display: flex;
  gap: 25px;
  cursor: pointer;
}

.star {
  font-size: 30px;
}

.filled {
  color: gold;
}

.empty {
  color: gray;
}

.rating-value {
  margin-top: 10px;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
}
</style>
