<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input type="number" ref="answer" min="4" max="9999" v-model="value" />
      <button type="submit">Go</button>
    </form>
    <div>try: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i+=1) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
      array.push(chosen);
    }
    return array;
  };

  export default {
    data() {
      return {
        answer: getNumbers(),
        tries: [],
        value: '',
        result: ''
      }
    },
    methods: {
      onSubmitForm(e) {
        e.preventDefault();
        if(this.value === this.answer.join('')){
          this.tries.push({
            try: this.value,
            result: 'HomeRun'
          });
          this.result = 'HomeRun';
          this.value = '',
          this.$refs.answer.focus();
          this.tries = [];
          alert('홈런! 게임을 다시 실행합니다.');
          this.answer = getNumbers();
        }
        else{                                                                   // 정답 틀렸을 때
          if(this.tries.length > 9) {
            this.result = `실패! 답은 ${this.answer.join(',')}였습니다.`;
            this.value = '',
            this.$refs.answer.focus();
            this.tries = [];
            this.answer = getNumbers();
            alert('게임을 다시 실행합니다.')
          }
          let strike = 0;
          let ball = 0;
          const answerArray = this.value.split('').map(v => parseInt(v));
          for(let i=0;i<4;i+=1){
            if (answerArray[i] === this.answer[i]){                             // 숫자, 자릿수 모두 정답
              strike++;
            }
            else if (this.answer.includes(answerArray[i])){                     // 숫자만 정답
              ball++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strike} strike, ${ball} ball`
          });
          this.value = '',
          this.$refs.answer.focus();
        }
      }
    }
  }
</script>

<style></style>
