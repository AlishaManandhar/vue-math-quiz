<template>
  <div class="container" v-if="questions.length">
    <div class="row">
      <div class="col-sm-6 offset-3">
        <Header :count="correctAnswer"  :total="totalQuestion" :resetData="reset"/>
        <hr />
        <QuestionBox :question="questions[totalQuestion]" :next="nextQuestion"  :increment="incrementIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  data() {
    return {
      totalQuestion : 0,
      correctAnswer : 0,
      questions : []
    };
  },
  async mounted(){
      const data1 = await fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple", {
          method:"GET"
      })
      const response = await data1.json()
      this.questions = response.results
  },
  methods: {
      incrementIndex() {
          this.correctAnswer += 1
      },
      nextQuestion()
      {
          
          if (this.totalQuestion <= 8)
          
          {
              this.totalQuestion += 1
          }
          else
          {
              alert("Score is "+ this.correctAnswer+ "/" + this.totalQuestion)
              this.reset()
          }
      },
      async reset(){
          const data1 = await fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple", {
          method:"GET"
          })
         const response = await data1.json()
         this.questions = response.results
         this.correctAnswer = 0
         this.totalQuestion = 0
      }
  },
  components: { Header, QuestionBox },
};
</script>

<style>
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
</style>