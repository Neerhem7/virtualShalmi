import React, { Suspense } from 'react'
import {
  Redirect,
  Route, 
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import adminRoutes from '../../routes/adminRoutes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const AdminContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {adminRoutes.map((adminroute, idx) => {
              return adminroute.component && (
                <Route
                  key={idx}
                  path={adminroute.path}
                  exact={adminroute.exact}
                  name={adminroute.name}
                  render={props => (
                    <CFade>
                      <adminroute.component {...props}  />
                    </CFade>
                  )} />
                 
              )
            })}      
            <Redirect from="/" to="/admindashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(AdminContent)
