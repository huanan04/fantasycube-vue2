import {get} from '../request'

export const jieLongInfo = groupId => get('/gushijielong/v1/get_now_jie_long_by_group', {groupId:groupId});
