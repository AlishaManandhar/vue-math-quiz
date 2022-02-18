<template>
  <ul class="nav mt-3 pb-3">
    <li class="nav-item">
      <a class="nav-link disabled">Fancy Computer Quiz</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Count {{count}}/{{total}} </a>
    </li>
    <button type="button" class="btn btn-danger shadow-none" @click="resetData()">Reset</button>
  </ul>
</template>

<script>

export default {
    props: ['count','total', 'resetData']
}
</script>