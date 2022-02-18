<template>
  <div class="card text-center">
    <div class="card-body">
      <div v-html="question.question" class="card-text pb-2"></div>

      <ul class="list-group mb-3">
        <li
          class="list-group-item"
          v-for="answer in shuffleAnswers"
          :key="answer"
          @click.prevent="!isAnswered && selectAnswer(answer)"
          :class="renderCSS(answer)"
          v-html="answer"
        />
      </ul>

      <button
        type="button"
        class="btn btn-primary me-2 shadow-none"
        @click="handleSubmit()"
        :disabled="isAnswered || selectedAnswer.length < 1"
      >
        Submit
      </button>
      <button
        type="button"
        class="btn btn-success shadow-none"
        @click="isAnswered && next()"
        :disabled="!isAnswered"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question", "next", "increment"],
  data() {
    return {
      selectedAnswer: "",
      isAnswered: false,
    };
  },
  watch: {
    question() {
      this.isAnswered = false;
      this.selectedAnswer = "";
    },
  },
  computed: {
    shuffleAnswers() {
      let data1 = [
        ...this.question.incorrect_answers,
        this.question.correct_answer,
      ];
      data1.sort(() => Math.random() - 0.5);
      return data1;
    },
  },

  methods: {
    selectAnswer(value) {
      this.selectedAnswer = value;
    },
    handleSubmit() {
      this.isAnswered = true;
      if (this.selectedAnswer === this.question.correct_answer) {
        this.increment();
      }
    },
    renderCSS(value) {
      let answerClass = "";

      if (!this.isAnswered && this.selectedAnswer === value) {
        return "selected";
      } else if (this.isAnswered) {
        if (
          this.selectedAnswer === value &&
          value !== this.question.correct_answer
        ) {
          return "incorrect";
        } else if (value === this.question.correct_answer) {
          return "correct";
        }
      }
    },
  },
};
</script>

<style scoped>
.list-group-item:hover {
  background-color: #eee;
  cursor: pointer;
}



.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}

.selected {
  background-color: burlywood;
}
</style>