<template>
  <div class="review-list">
    <h2>Reviews</h2>
    <!-- Show message if no reviews are available -->
    <p v-if="reviews.length === 0">No reviews yet. Be the first to review!</p>

    <!-- List all the reviews -->
    <div v-for="review in reviews" :key="review.id" class="review-item">
      <div class="review-author">
        <strong>{{ review.author }}</strong>
        <span v-if="review.rating" class="rating">({{ review.rating }}/10)</span>
      </div>
      <p class="review-content">{{ review.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// API Key and base URL for TMDB or similar API
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

// Props for passing the movie ID to the component
const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
})

const reviews = ref([]) // Array to store review data

// Fetch reviews for the given movie
onMounted(async () => {
  const movieId = props.movieId
  try {
    // Get the reviews from TMDB
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: { api_key: API_KEY },
    })

    // Process the reviews data
    reviews.value = response.data.results.map((review) => ({
      id: review.id,
      author: review.author,
      content: review.content,
      rating: review.author_details.rating || null, // Rating might be null
    }))
  } catch (error) {
    console.error('Error fetching reviews:', error)
  }
})
</script>

<style scoped>
.review-list {
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
}

.review-list h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.review-item {
  margin-bottom: 20px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.review-author {
  font-weight: bold;
  font-size: 1.1rem;
}

.rating {
  font-size: 0.9rem;
  color: gold;
}

.review-content {
  font-size: 1rem;
  margin-top: 10px;
  color: #333;
}
</style>
