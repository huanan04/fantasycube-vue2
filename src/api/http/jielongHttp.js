import {get} from '../request'

//根据群ID查询当前正在进行的接龙
export const getJieLongInfo = groupId => get('/gushijielong/v1/get_now_jie_long_by_group', {groupId:groupId});
//根据群ID查询所有已结束的接龙
export const getJieLongHistory = (groupId,num,size) => get('/gushijielong/v1/get_history', {groupId:groupId,num:num,size:size});
//根据titleId查询接龙信息
export const getJieLongInfoByTitleId = titleId => get('/gushijielong/v1/get_content_by_title_id', {titleId:titleId,});
