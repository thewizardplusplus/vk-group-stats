import React from 'react'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'
import {createDevTools} from 'redux-devtools'

export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-d' changePositionKey='ctrl-p'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)
