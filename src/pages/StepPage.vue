<template>
  <div class='step'>
    <NavBar />
    <div class='block'>
      <StepContent :step='step'> </StepContent>
    </div>
    <nav class='level'>
      <p class='level-item has-text-centered'>
        Step {{ step.id }} 
      </p>
      <p class='level-item has-text-centered'>
        <button class='button is-success' @click="$router.push(stepId < countSteps ? `/step/${stepId + 1}` : '/')">
          Next step
        </button>
      </p>
    </nav>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import StepContent from '@/components/StepContent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'StepPage',
  components: {
    NavBar, StepContent
  },
  methods: {

  },
  computed: {
    countSteps() {
      return this.$store.getters.countSteps
    },
    stepId() {
      return parseInt(this.$route.params.id)
    },
    step: function () {
      return this.getStepById(parseInt(this.$route.params.id))
    },
    ...mapGetters({
      getStepById: 'getStepById',
    }),
  }
}
</script>

<style scoped>
.block {
  margin: 20px;
}
.step {
  margin-bottom: 64px
}
.level {
  font-size: 150%;
  font-weight: 450;
}
</style>>

