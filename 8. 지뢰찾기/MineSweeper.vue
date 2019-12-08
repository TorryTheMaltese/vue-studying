<template>
    <div>
        <mine-form/>
        <div>{{ timer }}</div>
        <mine-table-component />
        <div>{{ result }}</div>
    </div>
</template>

<script>
import MineTableComponent from './MineTableComponent';
import MineForm from './MineForm';

import { mapState } from 'vuex';
import store, { INCREMENT_TIMER } from './store';

let interval;

export default {
    store,
    components:{
        MineTableComponent,
        MineForm,
    },
    computed: {
        ...mapState(['timer', 'result', 'halted'])
    },
    methods: {
        // onSubmitForm(e) {
        //     e.preventDefault(); // 페이지 새로고침을 막는다
        //     // ref 인풋 포커스
        // }
    },
    watch: {
        halted(value, oldValue) {
            if (value === false) {  // false일 때 게임 시작
                interval = setInterval(() =>{
                    this.$store.commit(INCREMENT_TIMER);
                }, 1000)
            } else {    // 게임 중단
                clearInterval(interval);
            }
        }
    }
};
</script>

<style>
table {
    border-collapse: collapse;
}
td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
}
</style>