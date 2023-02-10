<template>
  <div class='content'>
    <h2> Functionality </h2>
    <ul>
      <li>
        You can start the 'lesson' by clicking on the 'Start studying' button;;
      </li>
      <li>
        The upper panel displays the steps with the designation of the content type;
      </li>
      <li>
        Below are placed from left to right: the topic of the lesson, how many steps have been completed, how many tasks have been solved;
      </li>
      <li>
        On the panel with the list of steps, a step with video, audio and text content is automatically considered completed, steps with questions are considered completed only if the task is successfully completed;
      </li>
      <li>
        Being inside a step, it is possible to go either to the next step, or to any step from the list;
      </li>
      <li>
        At the first step, I suggest you watch the video;
      </li>
      <li>
        At the second step, I suggest listening to an interesting podcast about changes in the Frontend world;
      </li>
      <li>
        At the third step, I suggest you familiarize yourself with the material about declarative and imperative programming;
      </li>
      <li>
        In steps 4-7, I suggest trying yourself in problems for the development of mathematical and logical thinking, the answer is entered in the field for answers, the correct solution is displayed by changing the color of the step to green and the inscription about success;
      </li>

    </ul>
    <h2>Technology stack</h2>
    <ul>
      <li>
        The project is written in JavaScript + Vue3 + VueX + Bulma;
      </li>
      <li>
        Described components using hooks (created, mounted);
      </li>
      <li>
        I used the VueX library to create a Store;
      </li>
      <li>
        Used Vue Router for routing;
      </li>
      <li>
        I used the Vue VideoPlayer library to display video content and the Vue AudioPlayer library to play audio content;
      </li>
      <li>
        To display mathematical formulas , I used the Vue VueMathjax library;
      </li>
    </ul>
    <button class='button is-info'>
      <router-link to='/step/1'> Start studying </router-link>
    </button>
  </div>
</template>

<script>

export default {
  name: 'MainPage'
}
</script>

<style scoped>
.button a {
  color: white;
}

.content {
  margin: 31px;
}
</style>

