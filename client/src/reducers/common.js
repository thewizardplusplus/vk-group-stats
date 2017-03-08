import {SUCCESS_STATE} from '../common/states'

export const initialGroupsState = {
  state: SUCCESS_STATE,
  items: [],
}

export function setGroupState(groups, group_id, group_state) {
  return groups.map(group => {
    return group.data._id !== group_id ? group : {
      ...group,
      state: group_state,
    }
  })
}
