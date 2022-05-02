export type RouteAppObject = {
  path: string,
  name: string,  
  label?: string,
  authRequired: boolean,
  Component: React.FunctionComponent,
}