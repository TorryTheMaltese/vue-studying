<template>
  <div>
    <div>{{ turn }}의 턴</div>
    <table-component :tableData="tableData" />
    <div v-if="winner">{{ winner }}의 승리!</div>
  </div>
</template>

<script>
  import TableComponent from './TableComponent';

  export default {
    components: {
      TableComponent
    },
    data() {
      return {
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        turn: 'O',
        winner: ''
      };
    },
    computed: {
    },
    methods: {
      onChangeData() {
        
      }
    },
    mounted(){
    },
    beforeDestroyed(){
    }
  }
</script>

<style>
table { border-collapse: collapse; }
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
