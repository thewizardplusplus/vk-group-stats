import {SUCCESS_STATE} from '../common/states'

export const initialCollectionState = {
  state: SUCCESS_STATE,
  items: [],
}

export function updateGroup(groups, group_id, group_handler) {
  return groups.map(group => {
    return group.data._id === group_id ? group_handler(group) : group
  })
}

export function setGroupState(groups, group_id, group_state) {
  return updateGroup(groups, group_id, group => ({
    ...group,
    state: group_state,
  }))
}

export function setCountersState(groups, group_id, counters_state) {
  return updateGroup(groups, group_id, group => ({
    ...group,
    counters: {
      ...group.counters,
      state: counters_state,
    },
  }))
}
