<template>
  <div>
    <div>
      <nav class='navbar is-black' role='navigation' aria-label='pagination'>
        <a :key='step.id' v-for='step in allSteps' class='pagination-link'
          :class="{ 'current': step.id == $route.params.id, 'success': step.success }" @click='changePage(step.id)'>
          <span class='icon is-small'>
            <i :class="{
              'mdi mdi-18px mdi-help': step.type === 'question',
              'mdi mdi-24px mdi-play': step.type === 'video',
              'mdi mdi-23px mdi-volume-high': step.type === 'audio'
            }"></i>
          </span>
        </a>
      </nav>
    </div>
    <nav class='level'>
      <p class='level-item has-text-centered'>
        Topic of lesson
      </p>
      <p class='level-item has-text-centered'>
        {{ countSuccessSteps }} out of {{ allSteps.length }} steps completed
      </p>
      <p class='level-item has-text-centered'>
        {{ countSuccessQuestions }} out of {{ questionCount }} points received
      </p>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {
      page: 1,
      totalPages: 10,
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$router.push(`/step/${pageNumber}`)
    },
  },
  computed: {
    allSteps() {
      return this.$store.getters.allSteps
    },
    questionCount() {
      return this.$store.getters.allSteps.filter(s => s.type === 'question').length
    },
    countSuccessSteps() {
      return this.$store.getters.countSuccessSteps
    },
    countSuccessQuestions() {
      return this.$store.getters.countSuccessQuestions
    }
  }
}
</script>

<style scoped>
.navbar {
  width: auto;
  padding: 10px;
}

.current {
  border: 3px solid whitesmoke;
}

.pagination-link.success {
  background: #8fbc8f;
}

.pagination-link {
  background: #434B4D;
  color: white;
}

.level {
  font-size: 110%;
  font-weight: 450;
  margin: 30px 0px;
}
</style>
