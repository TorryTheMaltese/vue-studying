import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../3. 숫자야구/numberBaseball';
import ResponseCheck from '../4. 반응속도체크/responseCheck';
import LottoGenerator from '../6. 로또/lottoGenerator';
import RockScissorsPaper from '../5. 가위바위보/rockScissorsPaper';
import GameMatcher from './GameMatcher';

// vue-router 실제로 페이지가 바뀌지는 않지만 주소를 바꿔준다. => 페이지가 바뀐것처럼 해줌
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',    // 주소 깔끔하게 만들어줌 해쉬(#)를 없애준다.   //새로고침하면 에러가 생긴다.
    routes: [
        // { path: '/number-baseball', component: NumberBaseball },
        // { path: '/response-check', component: ResponseCheck },
        // { path: '/rock-scissors-paper', component: RockScissorsPaper },
        // { path: '/lotto-generator', component: LottoGenerator },
        { path: '/game/:name', component: GameMatcher }
    ]
});