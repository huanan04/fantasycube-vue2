import {get} from '../request'

export const jieLongInfo = p => get('/gushijielong/v1/get_now_jie_long_by_group', p);
export const jieLongInfo1 = p => get('/gushijielong/v1/get_now_jie_long_by_group?grouId=299468208', p);
